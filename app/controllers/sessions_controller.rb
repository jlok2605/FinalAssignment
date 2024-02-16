class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            session[:is_admin] = user.is_admin
            render json:user, status: :created
        else 
            render json: {error: {login: "Invalid password or username"}}, status: :unauthorized
        end
    end
    
    def destroy
        session.delete (:user_id)
        session.delete (:is_admin)
        head :no_content
    end
    
    def user_params
        params.permit(:username, :password)
    end
    
end