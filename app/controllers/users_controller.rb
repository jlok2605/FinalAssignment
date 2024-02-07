class UsersController < ApplicationController
  def new
    user = User.new
  end
  def create
    user = User.new(user_params)
    puts user
      if user.admin_code == '8582' && user.save
        user.is_admin = true
            # redirect_to root_path, notice: "Admin signup successful"\
        render json: {message: 'admin created'}, status: :created
            
          # Admin-specific logic
          # session[:admin_user_id] = @user.id
        
      else
        if user.save
          # redirect_to user_path(@user), notice: "User signup successful"
        render json: {message: 'regular user created'}, status: :created
        
        else
        # Save failed
        render json: {error: 'User not created'}, status: :not_created
        end
      end
  end
    
  def show
    user = User.find_by(id: session[:user_id])

    render json: user, status: :ok
  end

    def index
      users = User.all
      render json: users, status: :ok
    end
      def show
      user = User.find(params[:id]) 
      render json: user, status: :ok
    end

    def user_params
      params.permit(:username, :password,  :password_confirmation, :admin_code)
    end

end

