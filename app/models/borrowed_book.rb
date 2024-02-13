class BorrowedBook < ApplicationRecord
    belongs_to :user
    belongs_to :book

    def book_quantity
        book.quantity
    end
    private 
    def return_within_seven_days
        if checked_out_at &&(Time.now - checked_out_at) > 7.days 
            errors.add(:checked_out_at, "Book is overdue. Please contact an administrator")
        end
    end
end
