
class BorrowedBooksController < ApplicationController
    # before_action :authenticate_user!, only: [:create, :destroy]
    # before_action :authorize_admin, only: [:index]


    #To borrow a book
    def create
      borrowed_book = BorrowedBook.create(borrowed_book_params)
      book = Book.find(borrowed_book.book_id)
      borrowed_book.checked_out_at = Time.zone.now #To set checkout date to when button is clicked
      if book.quantity == 0
        puts "no more books remaining"
        render json: {error: "No copies of this book are available"}, status: :unprocessable_entity
      return
      end
        book.update(quantity: book.quantity - 1)
        render json: { message: 'Borrowed book' }, status: :created
    end
    #TO RETURN A BOOK
    def destroy
        borrowed_book = BorrowedBook.find(params[:id])
        book = Book.find(borrowed_book.book_id)
        book.update(quantity: book.quantity + 1)
        borrowed_book.destroy 
        render json: {message: "Book returned"}, status: :ok
    end
    def index
        borrowed_books = BorrowedBook.all
        render json: borrowed_books, status: :ok
    end
    private  
    def borrowed_book_params
      params.permit(:user_id, :book_id)
    end

   
  end
  