class AddTimeToBorrowedBooks < ActiveRecord::Migration[7.1]
  def change
    add_column:borrowed_books,
    :checked_out_at,
    :datetime

  end
end
