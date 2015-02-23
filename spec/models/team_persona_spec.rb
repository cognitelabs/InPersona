# == Schema Information
#
# Table name: team_personas
#
#  id         :integer          not null, primary key
#  persona_id :integer
#  team_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe TeamPersona, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
