class AddAvatarToPersonas < ActiveRecord::Migration
  def change
    add_column :personas, :avatar, :integer
  end
end
