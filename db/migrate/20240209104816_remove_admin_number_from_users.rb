class RemoveAdminNumberFromUsers < ActiveRecord::Migration[7.1]
  def change
    remove_column :users, :admin_number, :integer
  end
end
