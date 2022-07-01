import React from 'react';
import { Link } from 'react-router-dom';

const PinItem = ({ pin, createSaved, deleteSaved, board, boards, saved}) => (
    
   <div className='grid-images'>
        <Link to={`pins/${pin.id}`} className="pin-index-container" >
            <img src={pin.image_url} alt={pin.title} className="pin-index-img" />
        </Link>
{/* {console.log(pin)} */}
        {saved.map((save) => 
         (pin.id === save.pin_id) ?   
         <button type="submit" className='unsave-button' onClick={() => deleteSaved(pin.id)} >Saved</button>
        : <div>
            {boards.map(board => 
                <div className="dropdown" >
                <button type="submit" className='save-button' 
                >Save </button>
                
                <div className ="dropdown-content" onClick={() => createSaved({ pin_id: pin.id, user_id: currentUser.id, board_id: board.id })}>{board.name}</div>
                
            </div>
            )}
        </div>)}
        
    </div>
)
export default PinItem