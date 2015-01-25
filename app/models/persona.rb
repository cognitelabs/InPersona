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

class Persona < ActiveRecord::Base
	VALID_TECH_USE = ["novice", "typical", "advanced"]

	validates :persona_name, :persona_role, :persona_bio, presence: true
	validates :tech_use, :inclusion => {:in => VALID_TECH_USE }


end
