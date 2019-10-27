class Users < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.datetime :created_at
      t.datetime :updated_at
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
