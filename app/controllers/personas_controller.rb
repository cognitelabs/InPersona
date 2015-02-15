class PersonasController < ApplicationController
  before_action :authenticate_user!
  respond_to :json, :html
  
  def new
  end

  def create
     p = Persona.create(  :name => params[:name], :role => params[:job], :bio => params[:bio],:tech_use => params[:tech_use], 
      :devices => params[:devices], :os => params[:operating_systems], :social_networks => params[:social_networks], :goals => params[:goalsfield],
      :challenges => params[:challengesfield], :solutions => params[:helpfield], :gender => params[:gender], :age => params[:agerange], 
      :income => params[:income], :education => params[:education], :avatar_id => params[:avatar_id], :user_id => current_user.id)
    respond_to do |format|
      format.json { render json: { :test => current_user} }
    end
  end
end
