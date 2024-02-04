class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id

      if @user.admin? && @user.authenticate(params[:user][:admin_code])
        session[:admin_user_id] = @user.id
        flash.now[:notice] = 'Admin signup successful'
      else
        flash.now[:notice] = 'User signup successful'
      end

      redirect_to root_path
    else
      flash.now[:alert] = 'Failed to create user. Please check the form for errors.'
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

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
