class AddColumnToBorrowedBookauthor < ActiveRecord::Migration[7.1]
  def change
    add_column :borrowed_books, :author, :string
    add_column :borrowed_books, :title, :string
    add_column :borrowed_books, :yearpublished, :integer
    add_column :borrowed_books, :genre, :string
  end
end
