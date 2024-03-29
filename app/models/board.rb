class Board < ApplicationRecord
validates :name, presence: true
    # has_many :pins, 
    # primary_key: :id, 
    # foreign_key: :board_id, 
    # class_name: :Pin

    belongs_to :user, 
    primary_key: :id, 
    foreign_key: :creator_id, 
    class_name: :User

    # has_many :pinsids, 
    # primary_key: :id, 
    # foreign_key: :pin_ids, 
    # class_name: :Pin

    has_many :saved,
    primary_key: :id, 
    foreign_key: :board_id, 
    class_name: :Savepin
end