# == Schema Information
#
# Table name: team_personas
#
#  id           :integer          not null, primary key
#  persona_id   :integer
#  team_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  access_level :string
#

FactoryGirl.define do
  factory :team_persona do
    persona_id 1
team_id 1
  end

end
