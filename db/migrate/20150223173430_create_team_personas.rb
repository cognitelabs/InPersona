class CreateTeamPersonas < ActiveRecord::Migration
  def change
    create_table :team_personas do |t|
      t.integer :persona_id
      t.integer :team_id

      t.timestamps null: false
    end
  end
end
