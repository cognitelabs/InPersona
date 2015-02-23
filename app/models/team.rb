# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string
#  owner_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ActiveRecord::Base
  has_many :team_memberships
  has_many :users, :through => :team_memberships
  has_many :team_personas
  has_many :personas, :through => :team_personas
end
