class RemoveColumnsFromBorrowedBooks < ActiveRecord::Migration[7.1]
  def change
    remove_column :borrowed_books, :status, :boolean
    remove_column :borrowed_books, :book_title, :string
  end
end
