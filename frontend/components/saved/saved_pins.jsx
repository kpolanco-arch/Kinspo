import React, { Component } from 'react';
import { createSaved } from '../../util/save_util';


class SavedShowPin extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchSaved();
   
    }

    render() {
        
        const { saved, pin, user, currentUser } = this.props;
        // debugger
        // if (!saved) {
        //     return null
        // }
        return (
            <div >
                {/* <h2>Saved Pin</h2>
                <button type="submit" className='save-button' onClick={() => createSaved({pin_id: pin.id, user_id: currentUser.id })} >Save</button> */}
                <div className='grid-images'>
                    {/* {saved.pin_id === pin.id ? <div> */}
                        {/* {saved.user_id === user.id ? <div> */}

                        {/* <button type="submit" className='save-button'>Save</button> */}
                        <Link to={`pins/${pin.id}`} className="pin-index-container" >
                            <img src={pin.image_url} alt={pin.title} className="pin-index-img" />
                        </Link>
                    {/* </div> : null} */}

                </div>
            </div>
        )
    }


}

export default SavedShowPin;