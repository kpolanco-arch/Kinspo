class CreatePin < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :image_url 
      t.integer :creator_id, null: false
      t.text :description
      t.integer :board_id

      t.timestamps
    end
    add_index :pins, :creator_id
    add_index :pins, :board_id
  end
end
