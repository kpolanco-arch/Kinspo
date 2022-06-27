import React from "react";
import { fetchPin } from "../../actions/pin_actions";
// import pin_index_item_container from "./pin_index_item_container";

class PinIndexItem extends React.Component {
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
            <div>
                
                <h1>{pin.title}</h1>
                <textarea name="" id="" cols="30" rows="10">{pin.description}</textarea>
                <h3>{pin.creator_id}</h3>
            </div>
        )
    }


}

export default PinIndexItem;