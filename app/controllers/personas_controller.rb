class PersonasController < ApplicationController
  before_action :authenticate_user!
  respond_to :json, :html
  
  def new
  end

  def index
    respond_with Persona.all
  end

  def show
    @persona_id = params[:id]
    @p  = Persona.find(params[:id])
    @edu = @p.education
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
    p.save
    respond_to do |format|
      format.json { render json: { :test => "current_user updated"} }
    end
  end
end
