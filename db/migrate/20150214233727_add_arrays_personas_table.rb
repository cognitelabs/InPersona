class AddArraysPersonasTable < ActiveRecord::Migration
  def change
    remove_column :personas, :os
    remove_column :personas, :social_networks
    add_column :personas, :os, :string, array: true, default: []
    add_column :personas, :social_networks, :string, array: true, default: []
  end
end
