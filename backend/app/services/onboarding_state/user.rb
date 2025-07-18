# frozen_string_literal: true

class OnboardingState::User
  include Rails.application.routes.url_helpers
  attr_reader :user, :company

  def initialize(user:, company:)
    @user = user
    @company = company
  end

  def redirect_path
    if user.company_lawyer_for?(company)
      OnboardingState::Lawyer.new(user:, company:).redirect_path
    elsif user.company_worker_for?(company)
      OnboardingState::Worker.new(user:, company:).redirect_path
    elsif user.company_investor_for?(company)
      OnboardingState::Investor.new(user:, company:).redirect_path
    else
      nil
    end
  end
end
