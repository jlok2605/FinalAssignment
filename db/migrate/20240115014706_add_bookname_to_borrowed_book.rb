class AddBooknameToBorrowedBook < ActiveRecord::Migration[7.1]
  def change
    add_column :borrowed_books,
    :book_title,
    :string

  end
end
