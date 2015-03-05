class ChangePersonasAndAvatars < ActiveRecord::Migration
  def change
    remove_column :personas, :avatar
    remove_column :avatars, :persona
  end
end
