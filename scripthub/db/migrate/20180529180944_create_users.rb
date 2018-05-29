class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.integer :user_id
      t.string :gender
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :login_name
      t.string :login_password
      t.string :phone_number
      t.string :repo_id
      t.string :avatar

      t.timestamps
    end
  end
end
