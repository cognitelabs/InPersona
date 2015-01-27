class RemoveDevices < ActiveRecord::Migration
  def change
  	change_table :personas do |t|
  		t.remove :devices
  		t.text :devices, array: true, default: []
  	end
  end
end
