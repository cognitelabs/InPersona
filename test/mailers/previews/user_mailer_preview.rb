class UserMailerPreview < ActionMailer::Preview

  def add_to_team
    UserMailer.add_to_team("a.tokarev@t-home.mk")
  end

end