class UsersController < ApplicationController
    def new
        @user = User.new
    end
    def create
        @user = User.new(user_params)

        if @user.save
        # User created successfully
        # if @user.admin? && @user.authenticate(params[:user][:admin_code])
        # # Admin-specific logic
        #     session[:admin_user_id] = @user.id
        #     # redirect_to root_path, notice: "Admin signup successful"
        # else
        # # Regular user signup successful
        #     redirect_to root_path, notice: "User signup successful"
        # end
    else
        # User creation failed
        render :new
    end
    end
    def index
        @users =   User.all
        render json: @users, status: :ok
        end
    def show
        @user = User.find(params[:id]) 
        render json: @user, status: :ok
    end    
    
private
    def user_params
        params.require(:user).permit(:username)
    end
end




