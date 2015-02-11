class AvatarController < ApplicationController
  def upload_avatar
    avatar = Avatar.new()
    avatar.avatar = params[:file]
    avatar.save
    # respond_to do |format|
    #   format.json { render json: avatar }
    # end
  end
end
