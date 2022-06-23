class CreateBoard < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.string :description
      t.integer :creator_id, null: false
      t.integer :pin_ids
      t.timestamps
    end

    add_index :boards, :creator_id
    #Ex:- add_index("admin_users", "username")
  end
end
