@boards.each do |board|
    json.set! board.id do 
        json.extract! board, :id, :name, :description, :creator_id, :pin_ids
    end
end
