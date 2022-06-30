import React from 'react';
import { Link } from 'react-router-dom';

const PinItem = ({ pin, createSaved, deleteSaved}) => (
    <div className='grid-images'>
        <button type="submit" className='save-button' onClick={() => createSaved({ pin_id: pin.id, user_id: currentUser.id, board_id: "1"})} >Save</button>
        <Link to={`pins/${pin.id}`} className="pin-index-container" >
            <img src={pin.image_url} alt={pin.title} className="pin-index-img" />
        </Link>
        {pin.title}
        <button type="submit" className='unsave-button' onClick={() => deleteSaved(pin.id)} >Unsave</button>
    </div>
)
export default PinItem