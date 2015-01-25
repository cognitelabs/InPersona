class CreatePersonas < ActiveRecord::Migration
  def change
    create_table :personas do |t|
      t.text :persona_name
      t.text :persona_role
      t.text :persona_bio
      t.text :persona_goals
      t.text :persona_challenges
      t.text :persona_solutions
      t.text :tech_use
      t.text :persona_devices
      t.text :persona_os
      t.text :persona_social_networks
      t.text :persona_gender
      t.text :persona_age
      t.text :persona_income
      t.text :persona_education
      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
