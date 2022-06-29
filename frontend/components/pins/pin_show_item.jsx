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
            <div className="show-container">   
                <div className="show-pin-wrapper">
                    
                    <h1>{pin.title}</h1>
                    <label className="pin-img-container">
                        <img src={pin.image_url} alt={pin.title} className="pin-img" />
                    </label>    
                    <textarea name="" id="" cols="30" rows="10">{pin.description}</textarea>
                    <h3>{pin.creator_id}</h3>
                </div>
            </div>
        )
    }


}

export default PinShowItem;