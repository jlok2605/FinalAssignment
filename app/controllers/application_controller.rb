class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session 
    def current_user
        @current_user ||= User.find_by(id:sessions[:user_id] if session[:user_id])
    # if session[:user_id]
    #     @user = User.find_by(id:session[:user_id])
    # end
end
