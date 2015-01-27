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
  		@persona.name = nil
  		@persona.valid?
  		expect(@persona.errors[:name]).to include("can't be blank")
  	end		

  	it "should have a role" do
  		@persona.role = nil
  		@persona.valid?
  		expect(@persona.errors[:role]).to include("can't be blank")
  	end

  	it "should have a bio" do
  		@persona.bio = nil
  		@persona.valid?
  		expect(@persona.errors[:bio]).to include("can't be blank")
  	end

  	describe "a persona's tech use" do
  		it "should allow a value of novice" do
  			@persona.tech_use = "novice"
  			@persona.valid?
  			expect(@persona).to be_valid
  		end
  		it "should not values other than those in tech_use" do
	  		@persona.tech_use = "super awesome"
	  		@persona.valid?
	  		expect(@persona.errors[:tech_use]).to include("is not included in the list")
  		end
  	end

  	describe "a persona's devices" do
  		it "should permit a listed device" do
  			@persona.devices = "smartphone"
  			@persona.valid?
  			expect(@persona).to be_valid
  		end
  		it "should permit more than one listed device" do
        @persona.devices = ["smartphone", "tablet"]
        @persona.valid?
  			expect(@persona).to be_valid
  		end
  		it "should not permit an unlisted device" do
  			@persona.devices = "tardis"
  			@persona.valid?
  			expect(@persona.errors[:devices]).to include("is not included in the list")
  		end
  	end
  end
end
