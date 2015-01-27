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

FactoryGirl.define do
  factory :persona do
    name "John Smith"
    role "Doctor"
    bio "Born in Galifrey, John Smith's real name is unknown. He does cool stuff, though. Like, really cool stuff"
    goals "Save the universe, save humanity, choose hot companions. Except Rose. And Donna."
    challenges "Living so long"
    solutions "Kill him before he regenerates"
    tech_use "advanced"
    devices "computer"
    os "OS X"
    social_networks "Facebook, Twitter"
    gender "male"
    age ">55"
    income "< $30,000"
    education "advanced degree"
  end

end
