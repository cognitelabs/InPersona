class AddAccessLevelToTeamPersona < ActiveRecord::Migration
  def change
    add_column :team_personas, :access_level, :string
  end
end
