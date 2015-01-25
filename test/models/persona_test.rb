# == Schema Information
#
# Table name: personas
#
#  id                      :integer          not null, primary key
#  persona_name            :text
#  persona_role            :text
#  persona_bio             :text
#  persona_goals           :text
#  persona_challenges      :text
#  persona_solutions       :text
#  tech_use                :text
#  persona_devices         :text
#  persona_os              :text
#  persona_social_networks :text
#  persona_gender          :text
#  persona_age             :text
#  persona_income          :text
#  persona_education       :text
#  user_id                 :integer
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#

require 'test_helper'

class PersonaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
