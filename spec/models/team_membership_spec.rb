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

require 'rails_helper'

RSpec.describe TeamMembership, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
