class Team < ActiveRecord::Base
  has_many :teammemberships
  has_many :users, :through => :teammemberships
end
