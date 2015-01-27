class UpdatePersonaAttributes < ActiveRecord::Migration
  def change
  	change_table :personas do |t|
  		t.rename :persona_name, :name
  		t.rename :persona_role, :role
  		t.rename :persona_bio, :bio
  		t.rename :persona_challenges, :challenges
  		t.rename :persona_solutions, :solutions
  		t.rename :persona_devices, :devices
  		t.rename :persona_os, :os
  		t.rename :persona_social_networks, :social_networks
  		t.rename :persona_gender, :gender
  		t.rename :persona_age, :age
  		t.rename :persona_income, :income
  		t.rename :persona_education, :education
  	end
  end
end