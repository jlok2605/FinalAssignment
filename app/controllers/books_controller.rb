class BooksController < ApplicationController
    # before_action :authorize_admin, only: [:create, :destroy, :update]
    # skip_before_action :authorize_admin, only: [:index, :show]

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
        author = Author.find_or_create_by(name: params[:author_name])
        book = author.books.create!(book_params)
        
        render json: book, status: :created
    end
    


    
    def destroy
        book = Book.find(params[:id])
        book.destroy
        head :no_content, notice: 'Book destroyed successfully'
    end

    def update
        book = Book.find(params[:id])
        
        if book.update(book_params)
            render json: {message: "Book updated"}, status: :ok
        else
            render json:{error: "Failed to update book"}, status: :unprocessable_entity
        end
    end
    
    def borrow
        book = Book.find(params[:id])
        if book.quantity > 0
          book.update(quantity: book.quantity - 1)
          render json: { message: 'Book borrowed successfully' }
        else
          render json: { error: 'Book out of stock' }, status: :unprocessable_entity
        end
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