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
    render json: { user_id: session[:user_id], is_admin: session[:is_admin] }
  end
    def user_params
      params.permit(:username, :password, :password_confirmation, :admin_code)
    end
    
    def index
      users = User.all
      render json: users, status: :ok
  end
  

end

