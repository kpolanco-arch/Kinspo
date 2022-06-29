class CreateSavePin < ActiveRecord::Migration[5.2]
  def change
    create_table :save_pins do |t|
     t.integer :pin_id, null: false
     t.integer :creator_id
     t.integer :user_id
     t.integer :board_id
     t.timestamps
    end

    add_index :save_pins, :pin_id
  end
end
