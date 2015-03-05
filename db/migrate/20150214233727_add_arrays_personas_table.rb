class AddArraysPersonasTable < ActiveRecord::Migration
  def change
    add_column :personas, :os, :string, array: true, default: '[]'
    add_column :personas, :social_networks, :string, array: true, default: '[]'
  end
end
