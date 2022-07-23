import React from "react";
import { fetchPin } from "../../actions/pin_actions";
// import pin_index_item_container from "./pin_index_item_container";

class PinShowItem extends React.Component {
    constructor(props){
        super(props)
    }
componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId)
}
    render() {
        let pin = this.props.pin
        if (!pin ){
        return null}
        


        return (
            <div className="background-pin-show">
                <div className="back-arrow">
                    <button><span class="material-symbols-outlined">arrow_back</span></button>
                </div>
                <div className="show-container">   
                    <div className="show-pin-wrapper">
                        
                        <label className="pin-img-container">
                            <img src={pin.image_url} alt={pin.title} className="pin-img" />
                        </label> 
                    </div>
                    <div className="pin-text-container">
                            <div className="pin-header-container"> 
                                <div>
                                    {pin.board}
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </div>
                                <button className="save-button" type="submit">Save</button>
                            </div>
                            <div className="pin-header-container">
                                <h1>{pin.title}</h1> 
                            </div>
                                <div className="pin-show-description">
                                    {pin.description}
                                </div>
                            <h3>{pin.creator_id}</h3>
                    </div>
                    <div className="edit-icon">
                        <button>
                            <span class="material-symbols-outlined">
                            edit
                        </span>
                        </button>
                        
                    </div>
                </div>
            </div>
        )
    }


}

export default PinShowItem;