class CreateBorrowedBooks < ActiveRecord::Migration[7.1]
  def change
    create_table :borrowed_books do |t|
      t.boolean :status

      t.timestamps
    end
  end
end
