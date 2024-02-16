class UsersController < ApplicationController
  def create
    #creating a new user
    user = User.create(user_params)
      if user.save
        session[:user_id] = user.id
        render json: {message: user.is_admin ? 'admin created' : 'regular user created'}, status: :created
      else
        render json: {error: 'User not created'}, status: :unprocessable_entity
      end
  end
    
  def show
    user = User.find_by(id: session[:user_id])
    if user.nil?
      puts "Error: User not found"
      render json: { error: "User not found" }, status: :not_found
    else
      render json: user, status: :ok
    end
  end
    def user_params
      params.permit(:username, :password, :password_confirmation, :admin_code)
    end

end

