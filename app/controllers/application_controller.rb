class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session 
    # if session[:user_id]
    #     @user = User.find_by(id:session[:user_id])
    # end
end
