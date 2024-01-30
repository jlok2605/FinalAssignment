class User < ApplicationRecord
    # has_secure_password
    validates :admin_code,presence: true, if: :admin?
    has_many :borrowed_book

    def admin?
        admin_number.present?
    end

end
