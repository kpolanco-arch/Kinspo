json.extract! @pin, :id, :title, :description, :creator_id, :image_url
if @pin.photo.attached?
            json.photoUrl url_for(@pin.photo) 
end