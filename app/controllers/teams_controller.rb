class TeamsController < ApplicationController
  before_action :authenticate_user!
  respond_to :json, :html

  def index
    respond_with Team.all
    # respond_with current_user - ova da se iskoristi, so Team.where(owner_id = current_user or user id belongs in team)
  end

  def create
    t = Team.create(:name => params[:team_name], :owner_id => current_user.id)
    respond_to do |format|
      format.json { render json: { :team => t } }
    end
  end

  def show
    @t = Team.find(params[:id])
    @owner = User.find(@t.owner_id)
    @personas = Persona.where(user_id: @t.owner_id)
  end

  def add_member
    @u = User.find_by email: params[:email]
    if @u.nil?
       @response = "There is no such user"
       @t = TeamMembership.new(:team_id => params[:team], :user_email => params[:email], :user_id => nil)
       @t.save
       # mail needs to be sent to the user so the user can register
    else 
      @response = "Such user exists"
      @t = TeamMembership.new(:team_id => params[:team], :user_email => @u.email, :user_id => @u.id)
      @t.save
    end      

    respond_to do |format|
      format.json { render json: { :test => @response} }
    end
  end

  def remove_member

  end
end
