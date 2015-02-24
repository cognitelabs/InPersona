class TeamsController < ApplicationController
  before_action :authenticate_user!
  respond_to :json, :html

  def index
    respond_with Team.all
    # respond_with current_user - ova da se iskoristi, so Team.where(owner_id = current_user or user id belongs in team)
  end

  def create

  end

  def show
    @t = Team.find(params[:id])
    @owner = User.find(@t.owner_id)
  end

  def add_member
    respond_to do |format|
      format.json { render json: { :test => current_user} }
    end
  end

  def remove_member

  end
end
