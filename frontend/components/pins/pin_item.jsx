import React from 'react';
import { Link } from 'react-router-dom';

const PinItem = ({pin}) => (
    <li>
        <Link to={`pins/${pin.id}`} >
            <img src={pin.image_url} alt={pin.title} className="Pin-Image" />
        </Link>
        {pin.title}
    </li>
)
export default PinItem