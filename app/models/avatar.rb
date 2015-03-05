# == Schema Information
#
# Table name: avatars
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  avatar     :string
#

class Avatar < ActiveRecord::Base
  mount_uploader :avatar, AvatarUploader
  has_one :persona
end
