class Book < ApplicationRecord
    attribute :quantity, :integer
    # belongs_to:author
    has_many :borrowed_books

    def available_copies
        quantity - borrowed_books.where(returned_at: nil).count
    end
end
