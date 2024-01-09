class CreateStudents < ActiveRecord::Migration[7.1]
  def change
    create_table :students do |t|
      t.string :favouritebooks
      t.string :borrowedbooks
      t.string :overduebooks

      t.timestamps
    end
  end
end
