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

class TeamPersona < ActiveRecord::Base
  belongs_to :persona  
  belongs_to :team
end
