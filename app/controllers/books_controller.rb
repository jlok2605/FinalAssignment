class BooksController < ApplicationController
        #GET/Books displays all the books
    rescue_from ActiveRecord::RecordNotFound, with: :render_book_not_found
    def index
        books = Book.all
        return json: books, status :ok
    end
    
    def show
        book = Book.find(params[:id]) 
        render json: book, serializer: BookSerializer status: :ok
    
    end
    
    def create
        book = Book.create! (book_params)
        render json: book, status:created

    end
    
    def destroy
        book = Book.find(params[:id])
        book.destroy

    end
    
    private 
    def render_book_not_found
        render json {error: "Book not found"}, status :not_found
    end 
end