# == Schema Information
#
# Table name: personas
#
#  id              :integer          not null, primary key
#  name            :text
#  role            :text
#  bio             :text
#  goals           :text
#  challenges      :text
#  solutions       :text
#  tech_use        :text
#  os              :text
#  social_networks :text
#  gender          :text
#  age             :text
#  income          :text
#  education       :text
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  devices         :text             default("{}"), is an Array
#

require 'test_helper'

class PersonaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
