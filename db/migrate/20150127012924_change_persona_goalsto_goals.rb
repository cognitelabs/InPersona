class ChangePersonaGoalstoGoals < ActiveRecord::Migration
  def change
  	change_table :personas do |t|
  		t.rename :persona_goals, :goals
  	end
  end
end
