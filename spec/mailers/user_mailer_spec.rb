require "rails_helper"

RSpec.describe UserMailer, :type => :mailer do
  describe "add_to_team" do
    let(:mail) { UserMailer.add_to_team }

    it "renders the headers" do
      expect(mail.subject).to eq("Add to team")
      expect(mail.to).to eq(["to@example.org"])
      expect(mail.from).to eq(["from@example.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("Hi")
    end
  end

end
