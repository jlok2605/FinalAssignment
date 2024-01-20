class UserController < ApplicationController
    def new
        @user = User.new
    end
    
    def create
        @user = User.new(user_params)
        if @user.save 
            redirect_to_root_path, notice: "Signup successful"
                if @user.admin? && user.authenticate(param[:user][:admin_code])
        else 
            render :new
        end
    end
    def user_params
        params.require(:user).permit(:name,:password,:password_cofirmation,admin_number, admin_code)
        #Grant admin privilige
        session[admin_user_id] = @user_id
    end

end
