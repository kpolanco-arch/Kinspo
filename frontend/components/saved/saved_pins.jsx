import React, { Component } from 'react';
import { createSaved } from '../../util/save_util';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


class SavedShowPin extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchSaved();
        this.props.fetchPins();
   
    }

    render() {
        
        const { pins, pin, user, deleteSaved } = this.props;
        // debugger
        // if (!saved) {
        //     return null
        // }
        // pins.map(saved => )

        // let pinsonBoard = pins.filter(savedpin => savedpin.board_id === pin.id)
       
        return (
            <div >
                {/* <h2>Saved Pin</h2>
                <button type="submit" className='save-button' onClick={() => createSaved({pin_id: pin.id, user_id: currentUser.id })} >Save</button> */}
                <div className='grid-images'>
                    {pins.map((saved) => 
                    saved.id === pin.pin_id ? <div>
                        {/* <h1>this is the pin</h1> */}
                        <Link to={`/pins/${saved.id}`} className="pin-index-container" >
                            <img src={saved.image_url} alt={saved.title} className="pin-index-img" />
                        </Link>
                        <div className='gllery'>
                            <button className='unsave-button' type="submit" onClick={() => deleteSaved(saved.id)} >Saved</button>
                        </div>
                            
                    </div> : null)}

                </div>
            </div>
        )
    }


}

export default SavedShowPin;