class BorrowedBook < ApplicationRecord
    belongs_to :user
    belongs_to :book

    validates :checked_out_at, presence: true
    validate :return_date_within_limit
    
    def return_date_within_limit
        return if returned_at.nil? && (Time.now - checked_out_at) <= 7.days
        errors.add(:base, "Book must be returned within 7 days. ")
    end
end
