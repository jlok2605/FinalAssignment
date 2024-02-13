class BorrowedBook < ApplicationRecord
    belongs_to :user
    belongs_to :book

    def book_quantity
        book.quantity
    end
end
