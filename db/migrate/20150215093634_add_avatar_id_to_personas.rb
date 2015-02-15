class AddAvatarIdToPersonas < ActiveRecord::Migration
  def change
    add_column :personas, :avatar_id, :integer
  end
end
