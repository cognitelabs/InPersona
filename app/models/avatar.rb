class Avatar < ActiveRecord::Base
  mount_uploader :avatar, AvatarUploader
  has_one :persona
end
