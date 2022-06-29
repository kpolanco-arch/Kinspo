import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PinItem from './pin_item';

class PinIndex extends React.Component {
    constructor(props) {
        super(props)
    }

componentDidMount(){
// this.props.fetchPin(this.props.match.params.pinId)
this.props.fetchPins();
// this.props.createSaved();
// this.props.fetchUsers();
}

    render() {
        const { pins, createSaved } = this.props;
        return (
            <div>
                <h2>Pins</h2>
                <div className="gallery">
                    {pins.map(pin => <PinItem key={pin.title} pin={pin} createSaved={createSaved} />)}
                </div>
                <button type="submit" className='create-pin-button'>+</button>
                {/* <Route path="/pins/:pinId" component={pin_index_item_container} /> */}
            </div>
        )
    }


}

export default PinIndex;