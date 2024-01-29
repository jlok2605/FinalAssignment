class BorrowedBooksController < ApplicationController
    def borrow_book
        @user = User.find(params[:user_id])
        @book = Book.find(params[:book_id])

        if @book.available_copies.positive?
            @borrowed_book = BorrowedBook.create(user: @user, book:@book,checked_out_at:Time.now)
            redirect_to user_path(@user), alert: 'Book checked out successfully'
        else
            redirect_to user_path(@user), alert: "Currently no copies of this book available"
        end
    end
    def return
        @borrowed_book = BorrowedBook.find(params[:id])
        @user = @borrowed_book.user
        @book = @borrowed_book.book

        if @borrowed_book.returned_at.nil?
            @borrowed_book.update(returned_at:Time.now)
            redirect_to user_path(@user), notice: 'Book returned successfully'
        else
            redirect_to user_path(@user), alert: 'Book has already been returned'
        end
    end
end
