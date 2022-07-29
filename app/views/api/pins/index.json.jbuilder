@pins.each do |pin|
    json.set! pin.id do 
        json.extract! pin, :id, :title, :description, :creator_id, :image_url
        # json.photoUrl url_for(pin.photo)
    end
end
