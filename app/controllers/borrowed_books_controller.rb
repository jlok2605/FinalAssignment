class BorrowedBooksController < ApplicationController
    # before_action :authenticate_user!, only: [:borrow_book, :return]

    def index
        @user = User.find(params[:user_id])
        @borrowed_book = @user.borrowed_books.includes(:book)
    end
    def borrow_book
        @user = User.find(params[:user_id])
        @book = Book.find(params[:book_id])
        puts "TEST 1"

        if @user && @book
            begin
                @book.borrow!
                @borrowed_book = BorrowedBook.create(user: @user, book: @book, checked_out_at: Time.now)
                puts "WORKING!@!!!!"
                redirect_to user_path(@user), alert: 'Book checked out!'
            rescue StandardError => e
                redirect_to user_path(@user), alert: e.message
            end
        else
            redirect_to root_path, alert: 'User or book not found'
            puts "Not working"
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
#     def return
#         @borrowed_book = BorrowedBook.find(params[:id])
#         @user = @borrowed_book.user
#         @book = @borrowed_book.book

#         if @borrowed_book.returned_at.nil?
#             @borrowed_book.update(returned_at: Time.now)
#             redirect_to user_path(@user), notice: 'Book returned successfully'
#         else
#             redirect_to user_path(@user), alert: 'Book has already been returned'
#         end
#     end
# end
end
