class DropSavePins < ActiveRecord::Migration[5.2]
  def change
    drop_table :save_pins
  end
end
