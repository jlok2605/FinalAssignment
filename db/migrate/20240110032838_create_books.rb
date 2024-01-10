class CreateBooks < ActiveRecord::Migration[7.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :genre
      t.string :author
      t.integer :yearpublished

      t.timestamps
    end
  end
end
