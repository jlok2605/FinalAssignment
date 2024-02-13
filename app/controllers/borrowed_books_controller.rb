
    # before_action :authenticate_user!, only: [:create, :return]
class BorrowedBooksController < ApplicationController
    def create
      borrowed_book = BorrowedBook.create(borrowed_book_params)
      book = Book.find(borrowed_book.book_id)
      if book.quantity = 0
        render json: {error: "No copies of this book are available"}, status: :not_found
      else
        book.update(quantity: book.quantity - 1)
        render json: { message: 'Borrowed book' }, status: :created
      end
    end
    private  
    def borrowed_book_params
      params.permit(:user_id, :book_id)
    end
  end
  