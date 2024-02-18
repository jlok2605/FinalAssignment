class AuthorsController < ApplicationController
    def index
      @authors = Author.all
    end
    
    def show
      author = Author.findby()
    end
    def create
      author = Author.new(author_params)
  
      if author.save
        render json: author, status: :created
      else
        render json: author.errors, status: :unprocessable_entity
      end
    end
  
    private
  
    def author_params
      params.require(:author).permit(:name)
    end
end
  