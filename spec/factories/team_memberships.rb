# == Schema Information
#
# Table name: team_memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  team_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :team_membership do
    user_id 1
team_id 1
  end

end
