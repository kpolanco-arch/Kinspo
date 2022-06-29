import React from 'react';
import { Link } from 'react-router-dom';

const PinItem = ({ pin, createSaved }) => (
    <div className='grid-images'>
        <button type="submit" className='save-button' onClick={() => createSaved({ pin_id: pin.id, user_id: currentUser.id })} >Save</button>
        <Link to={`pins/${pin.id}`} className="pin-index-container" >
            <img src={pin.image_url} alt={pin.title} className="pin-index-img" />
        </Link>
        {pin.title}
    </div>
)
export default PinItem