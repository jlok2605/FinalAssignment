class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])

            session [:user_id] = user.id
            session [:is_admin] = user.is_admin
            render json: user, status: :o
    end
    
    def destroy
        session.delete :user_id
        session.delete :is_admin
        head :no_content
    end

    
end