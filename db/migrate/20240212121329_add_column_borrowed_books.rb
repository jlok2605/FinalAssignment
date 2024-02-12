class AddColumnBorrowedBooks < ActiveRecord::Migration[7.1]
  def change
    add_column :borrowed_books, :book_id, :integer
    add_column :borrowed_books, :user_id, :integer
  end
end
