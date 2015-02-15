class AddPersonaToAvatars < ActiveRecord::Migration
  def change
    add_column :avatars, :persona, :integer
  end
end
