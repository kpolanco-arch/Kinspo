class Pin < ApplicationRecord
    has_one_attached :photo

    belongs_to :user, 
    primary_key: :id, 
    foreign_key: :creator_id, 
    class_name: :User

    belongs_to :board, 
    primary_key: :id, 
    foreign_key: :board_id, 
    class_name: :Board

    has_many :saved,
    primary_key: :id, 
    foreign_key: :pin_id, 
    class_name: :Savepin

end