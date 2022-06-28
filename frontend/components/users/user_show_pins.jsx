import React from 'react';
import { Link } from 'react-router-dom';

const UserShowPin = ({ pin, user }) => (
    

    <div className='grid-images'>
       { pin.creator_id === user.id ? <div>
            <button type="submit" className='save-button'>Save</button>
            <Link to={`pins/${pin.id}`} className="pin-index-container" >
                <img src={pin.image_url} alt={pin.title} className="pin-index-img" />
            </Link>
            {pin.title}
        </div>: null }
        
    </div>
    
)
export default UserShowPin;

