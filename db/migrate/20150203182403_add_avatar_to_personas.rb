class AddAvatarToPersonas < ActiveRecord::Migration
  def change
    add_column :personas, :avatar, :string
  end
end
