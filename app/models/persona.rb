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
#  gender          :text
#  age             :text
#  income          :text
#  education       :text
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  devices         :text             default("{}"), is an Array
#  os              :string           default("{}"), is an Array
#  social_networks :string           default("{}"), is an Array
#  avatar_id       :integer
#  access_level    :string
#

class Persona < ActiveRecord::Base
	VALID_TECH_USE = ["Novice", "Regular", "Advanced"]
	VALID_DEVICES = ["smartphone", "computer", "tablet"]
  belongs_to :avatar
	validates :name, :role, :bio, presence: true
	validates :tech_use, :inclusion => {:in => VALID_TECH_USE }
	# validates :devices, :inclusion => {:in => VALID_DEVICES }, allow_blank: true
	# validates_each :devices do |record, attr, value|
	# 	string_value = value.pop.to_s
	# 	record.errors.add(attr, "is not included in the list") unless VALID_DEVICES.include?(string_value) || []
	# end
  has_many :team_personas
  has_many :teams, :through => :team_personas


end
