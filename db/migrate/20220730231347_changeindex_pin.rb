class ChangeindexPin < ActiveRecord::Migration[5.2]
  def change
    remove_index :pins, :board_id
  end
end
