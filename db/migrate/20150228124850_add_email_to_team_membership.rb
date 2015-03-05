class AddEmailToTeamMembership < ActiveRecord::Migration
  def change
    add_column :team_memberships, :user_email, :string
  end
end
