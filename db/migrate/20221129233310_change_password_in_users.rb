class ChangePasswordInUsers < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :password, :password_digest
  end
end
