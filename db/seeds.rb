# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

for i in 1..16
  avatar = Avatar.new
  avatar.avatar = Rails.root.join("public/images/avatar"+i.to_s+".jpg").open
  avatar.save!
end
