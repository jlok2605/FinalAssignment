class AddQtyToBook < ActiveRecord::Migration[7.1]
  def change
    add_column :books, :quantity, :integer
  end
end
