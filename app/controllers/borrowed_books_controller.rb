class BorrowedBooksController < ApplicationController
    before_action :authenticate_user!, only: [:create, :return]
    before_action 

    def index
        @user = User.find(params[:user_id])
        @borrowed_book = @user.borrowed_books.includes(:book)
    end
    def create
        @user = User.find(params[:user_id])
        @book = Book.find(params[:book_id])
        @book.borrow!
        @borrowed_book = BorrowedBook.create(user: @user, book: @book, checked_out_at: Time.now)
        rescue ActiveRecord::RecordNotFound => e
                redirect_to user_path(@user), alert: 'Book checked out!'
        rescue StandardError => e
            redirect_to user_path(@user), alert: 'User or book not found'
        end
    end



    def borrow! 
        #Changes the quantities of books
        if available_quantities.positive?
            update(available_quantities: available_quantities - 1)
        else
            raise 'No available copies of this book'
        end
    end
end
