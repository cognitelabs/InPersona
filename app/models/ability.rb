class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new #guest
    #can :manage, :all

    can :read, Team do |team|
      team.owner_id == user.id
    end

    can :add_member, Team do |team|
      team.owner_id == user.id
    end

    can :add_persona_to_team, Team do |team|
      team.owner_id == user.id
    end

    can :read, Persona do |persona|

      if user.id == nil
        persona.access_level == "Public"
      else
        @teams_in_which_user_belongs =  TeamMembership.where(:user_id => user.id).pluck(:team_id)

        # persona ids that are created by the current user and personas that are shared by another team member-and are read-write
        @my_personas = Persona.where(:user_id => user.id).pluck(:id)
        @team_personas_that_can_be_edited  = TeamPersona.where('team_id  in (?)',@teams_in_which_user_belongs).where(access_level: "read-only").pluck(:persona_id)
        # personas ids that are public and not current user's and personas that are shared by another team member-and are read-only
        @public_personas = Persona.where(:access_level => "Public").where.not(user_id: user.id).pluck(:id)
        @team_personas_that_can_be_read_only = TeamPersona.where('team_id  in (?)',@teams_in_which_user_belongs).where(access_level: "read and write").pluck(:persona_id)

        @result = @my_personas + @team_personas_that_can_be_edited + @public_personas + @team_personas_that_can_be_read_only
        @result.uniq!  

        @result.include?(persona.id)

      end
      
    end

    can :update, Persona do |persona|
      teams_in_which_user_belongs =  TeamMembership.where(:user_id => user.id).pluck(:team_id)
      my_personas = Persona.where(:user_id => user.id).pluck(:id)
      team_personas_that_can_be_edited  = TeamPersona.where('team_id  in (?)',teams_in_which_user_belongs).where(access_level: "read and write").pluck(:persona_id)
 
      result = my_personas + team_personas_that_can_be_edited

      result.include?(persona.id)
    end
  end
end
