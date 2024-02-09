class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json:user, status: :created
        else 
            render json: {error: {login: "Invalid password or username"}}, status: :unauthorized
        end

            session [:is_admin] = user.is_admin
            
            render json: user
    end
    
    def destroy
        session.delete :user_id
        session.delete :is_admin
        head :no_content
    end

    
end