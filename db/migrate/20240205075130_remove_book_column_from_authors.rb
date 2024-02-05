class RemoveBookColumnFromAuthors < ActiveRecord::Migration[7.1]
  def change
    remove_column :authors, :books, :string
  end
end
