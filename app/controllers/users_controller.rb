class UsersController < ApplicationController
    def new
        @user = User.new
    end
    def create
      @user = User.new(user_params)
  
      if (@user.password == @user.password_confirmation) && @user.save
        # session[:user_id] = @user.id
        # User created successfully
        if @user.admin? && @user.authenticate(params[:user][:admin_code])
          # Admin-specific logic
          session[:admin_user_id] = @user.id
          redirect_to root_path, notice: "Admin signup successful"
        else
          # Regular user signup successful
          redirect_to root_path, notice: "User signup successful"
        end
      else
        # Password and confirmation don't match, or save failed
        flash.now[:alert] = 'Passwords do not match. Please ensure they match'
        render :new
      end
    end
  
    def index
      @users = User.all
      render json: @users, status: :ok
    end
      def show
      @user = User.find(params[:id]) 
      render json: @user, status: :ok
    end

    def user_params
      params.require(:user).permit(:username, :password,  :password_confirmation)
    end
end