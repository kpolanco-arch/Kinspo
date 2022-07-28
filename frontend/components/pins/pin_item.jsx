import React from 'react';
import { Link } from 'react-router-dom';
import SavePin from './save_pin';

class PinItem extends React.Component {
    constructor(props){
        super(props)
       
    }

   


    render () {

    const { pin, createSaved, deleteSaved, board, boards, saved} = this.props;
    
        

    return (
        <div className='grid-images'>
                <Link to={`pins/${pin.id}`} className="pin-index-container" >
                    <SavePin key={pin.title} pin={pin} createSaved={createSaved} deleteSaved={deleteSaved} boards={boards} saved={saved} />
                    <img src={pin.image_url} alt={pin.title} className="pin-index-img" />
                </Link>
                {/* {saved.map((save) => 
                (pin.id === save.pin_id) ?   
                <button type="submit" className='unsave-button' onClick={() => deleteSaved(pin.id)} >Saved</button>
                : <div>
                    {boards.map(board => 
                        <div className="dropdown" >
                        <button type="submit" className='save-button'>Save </button>
                        <div className ="dropdown-content" onClick={() => createSaved({ pin_id: pin.id, user_id: currentUser.id, board_id: board.id })}>{board.name}</div>
                        
                    </div>
                    )}
                </div>)} */}
                
            </div>
    )}
}

export default PinItem