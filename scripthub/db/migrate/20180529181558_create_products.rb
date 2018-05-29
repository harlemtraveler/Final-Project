class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :product_id
      t.text :product_name
      t.string :platform
      t.string :product_price

      t.timestamps
    end
  end
end
