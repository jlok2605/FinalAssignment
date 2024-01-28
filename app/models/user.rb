class User < ApplicationRecord
    has_secure_password
    validates :admin_code,presence: true, if: :admin?

    def admin?
        admin_number.present?
    end

end
