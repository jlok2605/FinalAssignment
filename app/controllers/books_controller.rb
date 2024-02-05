class BooksController < ApplicationController
    # before_action :require_admin, only: [:create, :destroy]
    # before_action :authenticate_user!
        #GET/Books displays all the books
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
        render json: book, status:created
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

    # def require_admin
    #     unless current_user&.admin?
    #     render json: { error: 'You do not have permission to perform this action' }, status: :forbidden
    #     end
    # end
    def book_params
        params.require(:book).permit(:title, :genre, :author, :yearpublished, :quantity)
    end

    # def authenticate_user!
#     unless current_user
#         redirect_to login_path, alert: 'Please log in'
        #end
end