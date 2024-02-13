
    # before_action :authenticate_user!, only: [:create, :return]
class BorrowedBooksController < ApplicationController
    def create
      borrowed_book = BorrowedBook.create(borrowed_book_params)
      render json: { message: 'Borrowed book' }, status: :created
    end
  
    private
  
    def borrowed_book_params
      params.permit(:user_id, :book_id)
    end
  end
  