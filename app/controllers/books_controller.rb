class BooksController < ApplicationController
    #GET/Books displays all the books
    def index
        books = Book.all
        return json: books, status :ok
    end

    def show
    end

    def create
    end

    def destroy
    end
end