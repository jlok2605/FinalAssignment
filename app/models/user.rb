class User < ApplicationRecord
    has_secure_password
    validates :admin_code,presence: true, if: :admin?
    validates :password, presence: true, length: {minimum:4} 
    validates :password_confirmation, presence: true
    validates :username, presence: true, uniqueness: true
    has_many :borrowed_books
    before_validation :check_admin_code_and_set_admin_flag, on: :create

    def check_admin_code_and_set_admin_flag
        self.is_admin = admin_code == '8582'
    end
    def admin?
        is_admin
    end

end
