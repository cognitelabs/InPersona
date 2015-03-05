class UserMailer < ApplicationMailer
  default from: "inPersona@gmail.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.add_to_team.subject
  #
  def add_to_team(email)
    @greeting = "Hi"
     mail(:to => email, :subject => "Register to Persona website !")
  end
end
