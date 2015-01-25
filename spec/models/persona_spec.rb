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

require 'rails_helper'

RSpec.describe Persona, :type => :model do
  before :each do
  	@persona = build(:persona)
  end

  describe "a valid Persona" do
  	xit "should have an image" do
  		pending("validate the presence of an image")
  		pending("validate image size")
  		pending("validate the upload works")
  		pending("validate provided stock photos work")
  	end

  	it "should have a name" do
  		@persona.persona_name = nil
  		@persona.valid?
  		expect(@persona.errors[:persona_name]).to include("can't be blank")
  	end		

  	it "should have a role" do
  		@persona.persona_role = nil
  		@persona.valid?
  		expect(@persona.errors[:persona_role]).to include("can't be blank")
  	end

  	it "should have a bio" do
  		@persona.persona_bio = nil
  		@persona.valid?
  		expect(@persona.errors[:persona_bio]).to include("can't be blank")
  	end

  	describe "a persona's tech use" do
  		it "should allow a value of novice" do
  			@persona.tech_use = "novice"
  			@persona.valid?
  			expect(@persona).to be_valid
  		end
  		it "should not values other than those in @tech_use" do
	  		@persona.tech_use = "super awesome"
	  		@persona.valid?
	  		expect(@persona.errors[:tech_use]).to include("is not included in the list")
  		end
  	end
  end
end
