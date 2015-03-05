class ChangePersonasTable < ActiveRecord::Migration
  def change
    remove_column :personas, :os
    remove_column :personas, :social_networks
  end
end
