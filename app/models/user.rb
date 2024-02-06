class User < ApplicationRecord
    has_secure_password
    validates :admin_code,presence: true, if: :admin?
    validates :password, presence: true, length: {minimum:4} 
    validates :password_confirmation, presence: true
    validates :username, presence: true, uniqueness: true
    has_many :borrowed_books

    def admin?
        admin_number.present?
    end

end
