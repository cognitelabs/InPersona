class TeamsController < ApplicationController
  before_action :authenticate_user!
  respond_to :json, :html
  #authorize_resource

  def index
    respond_with Team.where(:owner_id => current_user.id)
  end

  def create
    t = Team.create(:name => params[:team_name], :owner_id => current_user.id)
    respond_to do |format|
      format.json { render json: { :team => t } }
    end
  end

  def show
    @t = Team.find(params[:id])
    authorize! :read, @t
    @owner = User.find(@t.owner_id)

    # show only personas that have not been added to the TeamPersona relation
    @pids = TeamPersona.where(:team_id => params[:id]).pluck(:persona_id)
    @personas = Persona.where(user_id: @t.owner_id)
    if !@pids.empty?
      @personas = @personas.where('id not in (?)',@pids)
    end

    @team_members = TeamMembership.where(team_id: params[:id])
  end

  def add_member
    @u = User.find_by email: params[:email]
    @t =  Team.find(params[:team])
    authorize! :add_member, @t
    if @u.nil?
       @response = "There is no such user"
       @t = TeamMembership.new(:team_id => params[:team], :user_email => params[:email], :user_id => nil)
       @t.save
       UserMailer.add_to_team(params[:email]).deliver_now 
       # the above line needs to be uncommented in production
    else 
      @response = "Such user exists"
      @t = TeamMembership.new(:team_id => params[:team], :user_email => @u.email, :user_id => @u.id)
      @t.save
    end      

    respond_to do |format|
      format.json { render json: { :mem => @t} }
    end
  end

  def remove_member
    TeamMembership.destroy(params[:team_mem_id]);
    respond_to do |format|
      format.json { render json: {:success => "successfuly deleted"}}
    end
  end

  def add_persona_to_team
    @team = Team.find(params[:team_id])
    authorize! :add_persona_to_team, @team
    @t = TeamPersona.new(:persona_id => params[:persona_id], :access_level => params[:access], :team_id => params[:team_id])
    @t.save

    respond_to do |format|
      format.json  { render json: {:test => "Dobro e"} } 
    end
  end


end
