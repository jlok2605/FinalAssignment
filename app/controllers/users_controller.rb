class UsersController < ApplicationController
    def new
        @user = User.new
    end
    def create
      @user = User.new(user_params)
      if @user.save
        redirect_to user_path(@user),notice: 'USer created successfully'
      else
        redirect_to root_path
      end
    end
  
      # if (@user.password == @user.password_confirmation) && @user.save
      #   # User created successfully
      #   if @user.admin? && @user.authenticate(params[:user][:admin_code])
      #     # Admin-specific logic
      #     session[:admin_user_id] = @user.id
      #     redirect_to root_path, notice: "Admin signup successful"
      #   else
      #     # Regular user signup successful
      #     redirect_to root_path, notice: "User signup successful"
      #   end
      # else
      #   # Password and confirmation don't match, or save failed
      #   flash.now[:alert] = 'Passwords do not match. Please ensure they match'
      #     puts 'Not working'
      # end
  
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
  # def new
  #   @user = User.new
  # end

  # def create
  #   @user = User.new(user_params)

  #   if @user.save
  #     session[:user_id] = @user.id

  #     if @user.admin? && @user.authenticate(params[:user][:admin_code])
  #       session[:admin_user_id] = @user.id
  #       flash.now[:notice] = 'Admin signup successful'
  #     else
  #       flash.now[:notice] = 'User signup successful'
  #     end

  #     redirect_to root_path
  #   else
  #     flash.now[:alert] = 'Failed to create user. Please check the form for errors.'
  #     render :new
  #   end
  # end

  # def index
  #   @users = User.all
  #   render json: @users, status: :ok
  # end

  # def show
  #   @user = User.find(params[:id]) 
  #   render json: @user, status: :ok
  # end

  # private

  # def user_params
  #   params.require(:user).permit(:username, :password, :password_confirmation)
  # end
end
