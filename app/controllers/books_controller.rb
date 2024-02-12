class BooksController < ApplicationController
    before_action :authorize_admin, only: [:create, :destroy]
    before_action :authorize
    skip_before_action :authorize_admin, only: [:index, :show]

    rescue_from ActiveRecord::RecordNotFound, with: :render_book_not_found

    def index
        books = Book.all
        render json: books, status: :ok
    end
    
    def show
        book = Book.find(params[:id]) 
        render json: book, serializer: BookSerializer, status: :ok
    end
    
    def create
        book = Book.create! (book_params)

        render json: book, status: :created
    end
    
    def destroy
        book = Book.find(params[:id])
        book.destroy
        head :no_content, notice: 'Book destroyed successfully'
    end
    
    private 
    def render_book_not_found
        render json: {error: "Book not found"}, status: :not_found
    end 

    def book_params
        params.require(:book).permit(:title, :genre, :author_id, :yearpublished, :quantity)
    end

    def authorize_admin
        return render json: {error: "Only admin users permitted"}, status: :unauthorized unless session [:is_admin]
    end
end