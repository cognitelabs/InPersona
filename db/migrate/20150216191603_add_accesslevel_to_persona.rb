class AddAccesslevelToPersona < ActiveRecord::Migration
  def change
    add_column :personas, :access_level, :string
  end
end
