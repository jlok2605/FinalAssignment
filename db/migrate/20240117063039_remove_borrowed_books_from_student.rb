class RemoveBorrowedBooksFromStudent < ActiveRecord::Migration[7.1]
  def change
    remove_column :students,
    :borrowedbooks
  end
end
