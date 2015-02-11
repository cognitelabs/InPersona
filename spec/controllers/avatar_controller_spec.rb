require 'rails_helper'

RSpec.describe AvatarController, :type => :controller do

  describe "GET upload_avatar" do
    it "returns http success" do
      get :upload_avatar
      expect(response).to have_http_status(:success)
    end
  end

end
