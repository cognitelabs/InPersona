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

FactoryGirl.define do
  factory :persona do
    persona_name "John Smith"
    persona_role "Doctor"
    persona_bio "Born in Galifrey, John Smith's real name is unknown. He does cool stuff, though. Like, really cool stuff"
    persona_goals "Save the universe, save humanity, choose hot companions. Except Rose. And Donna."
    persona_challenges "Living so long"
    persona_solutions "Kill him before he regenerates"
    tech_use "advanced"
    persona_devices "smartphone, computer"
    persona_os "OS X"
    persona_social_networks "Facebook, Twitter"
    persona_gender "male"
    persona_age ">55"
    persona_income "< $30,000"
    persona_education "advanced degree"
  end

end
