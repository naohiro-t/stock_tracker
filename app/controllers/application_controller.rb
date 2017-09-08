class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # basically authentication is necessary
  before_action :authenticate_user!


end
