class PersonasController < ApplicationController
  before_action :authenticate_user!, :except => [:index, :show]
  respond_to :json, :html
  load_and_authorize_resource :only => [:show, :update]
  
  def new
    add_breadcrumb "Creation of a new persona", new_persona_path
  end

  def index
    add_breadcrumb "All Personas", :personas_path

    if current_user.nil? 
      respond_with Persona.where(:access_level => "Public")

    else
      @teams_in_which_user_belongs =  TeamMembership.where(:user_id => current_user.id).pluck(:team_id)

      # persona ids that are created by the current user and personas that are shared by another team member-and are read-write
      @my_personas = Persona.where(:user_id => current_user.id).pluck(:id)
      @team_personas_that_can_be_edited  = TeamPersona.where('team_id  in (?)',@teams_in_which_user_belongs).where(access_level: "read-only").pluck(:persona_id)
      # personas ids that are public and not current user's and personas that are shared by another team member-and are read-only
      @public_personas = Persona.where(:access_level => "Public").where.not(user_id: current_user.id).pluck(:id)
      @team_personas_that_can_be_read_only = TeamPersona.where('team_id  in (?)',@teams_in_which_user_belongs).where(access_level: "read and write").pluck(:persona_id)

      @result = @my_personas + @team_personas_that_can_be_edited + @public_personas + @team_personas_that_can_be_read_only
      @result.uniq!    

      respond_with Persona.where('id in (?)', @result)
    end
  end

  def show
    add_breadcrumb "All Personas", personas_path
    add_breadcrumb "Persona: #{Persona.find(params[:id]).name}", persona_path(params[:id])

    if current_user.nil? 
      result = []
    else
      teams_in_which_user_belongs =  TeamMembership.where(:user_id => current_user.id).pluck(:team_id)
      my_personas = Persona.where(:user_id => current_user.id).pluck(:id)
      team_personas_that_can_be_edited  = TeamPersona.where('team_id  in (?)',teams_in_which_user_belongs).where(access_level: "read and write").pluck(:persona_id)
      result = my_personas + team_personas_that_can_be_edited
    end
    
    @show_edit = result.include?(params[:id].to_i)
   

    @persona_id = params[:id]
    @p  = Persona.find(params[:id])
    @avatar_url = @p.avatar.avatar.url

    @gfield = @p.goals.split("\n•")
    @gtitle = @gfield.shift

    @cfield = @p.challenges.split("\n•")
    @ctitle = @cfield.shift

    @sfield = @p.solutions.split("\n•")
    @stitle = @sfield.shift      

    respond_to do |format|
      format.html
      format.pdf do
        render :pdf => "file_name",:template => 'personas/print.html.erb'
       end
    end
  end


  def create
     p = Persona.create(  :name => params[:name], :role => params[:job], :bio => params[:bio],:tech_use => params[:tech_use], 
      :devices => params[:devices], :os => params[:operating_systems], :social_networks => params[:social_networks], :goals => params[:goalsfield],
      :challenges => params[:challengesfield], :solutions => params[:helpfield], :gender => params[:gender], :age => params[:agerange], 
      :income => params[:income], :education => params[:education], :avatar_id => params[:avatar_id], :user_id => current_user.id, :access_level => params[:level])
    respond_to do |format|
      format.json { render json: { :test => current_user} }
    end
  end

  def update
    p = Persona.find(params[:id])

    p.name = params[:name]
    p.role = params[:job]
    p.bio = params[:bio]
    p.tech_use = params[:tech_use]
    p.devices = params[:devices]
    p.os = params[:operating_systems]
    p.social_networks = params[:social_networks]
    p.goals = params[:goalsfield]
    p.challenges = params[:challengesfield]
    p.solutions = params[:helpfield]
    p.gender = params[:gender]
    p.age = params[:agerange]
    p.income = params[:income]
    p.education = params[:education]
    p.avatar_id = params[:avatar_id]
    p.access_level = params[:level]
    p.save
    respond_to do |format|
      format.json { render json: { :test => "current_user updated"} }
    end
  end
end
