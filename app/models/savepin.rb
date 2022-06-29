class Savepin < ApplicationRecord
    
    belongs_to :user, 
    primary_key: :id, 
    foreign_key: :creator_id, 
    class_name: :User

    belongs_to :user, 
    primary_key: :id, 
    foreign_key: :user_id, 
    class_name: :User

    belongs_to :board, 
    primary_key: :id, 
    foreign_key: :board_id, 
    class_name: :Board

    belongs_to :pin, 
    primary_key: :id, 
    foreign_key: :pin_id, 
    class_name: :Pin


end