class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :username, null: false
      t.string :session_token, null: false
      t.string :name
      t.timestamps

    end
  add_index :users, :username, unique: true
  add_index :users, :email, unique: true
  add_index :users, :session_token, unique: true
  #Ex:- add_index("admin_users", "username")
  end
end
