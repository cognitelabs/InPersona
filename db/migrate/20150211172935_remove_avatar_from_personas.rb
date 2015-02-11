class RemoveAvatarFromPersonas < ActiveRecord::Migration
  def change
    remove_column :personas, :avatar, :string
  end
end
