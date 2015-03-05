class AvatarController < ApplicationController
  def upload_avatar
    avatar = Avatar.new()
    avatar.avatar = params[:file]
    avatar.save
    respond_to do |format|
      format.json { render json: { :avatar_id => avatar.id, :avatar_url => avatar.avatar.url  } }
    end
  end
end
