class UsersController < ApplicationController
  def create
    user = User.create(user_params)
      if user.save
        render json: {message: user.is_admin ? 'admin created' : 'regular user created'}, status: :created
      else
        # Save failed
        render json: {error: 'User not created'}, status: :unprocessable_entity
      end
  end
    
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: {error: "Not authorized"}, status: :unauthorized
    end
  end

    def index
      users = User.all
      render json: users, status: :ok
    end


    def user_params
      params.permit(:username, :password,  :password_confirmation, :admin_code)
    end

end

