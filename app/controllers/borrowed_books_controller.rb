class BorrowedBooksController < ApplicationController
    def borrowbook
        @user = User.find(params[:user_id])
        @book = Book.find(params[:book_id])
    end

    if @book.available?
        @borrow = Borrow.create(user: @user, book:@book,checked_out_at:Time.now)
        @book.update(available:false)
end
