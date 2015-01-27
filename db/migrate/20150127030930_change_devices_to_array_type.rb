class ChangeDevicesToArrayType < ActiveRecord::Migration
  def change
  	change_column_default :personas, :devices, array: true
  	change_column_default :personas, :devices, default: []
  end
end
