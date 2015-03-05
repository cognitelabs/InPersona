# == Schema Information
#
# Table name: avatars
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  avatar     :string
#

require 'rails_helper'

RSpec.describe Avatar, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
