import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PinItem from './pin_item';
import { Link } from 'react-router-dom';

class PinIndex extends React.Component {
    constructor(props) {
        super(props)
    }

componentDidMount(){
// this.props.fetchPin(this.props.match.params.pinId)
this.props.fetchPins();
this.props.fetchBoards()
// this.props.createSaved();
// this.props.fetchUsers();
}

    render() {
        const { pins, createSaved, deleteSaved, boards} = this.props;
        // console.log(boards)
        return (
            <div>
                <h2> Home Pins</h2>
                <div className="gallery">
                    {pins.map(pin => <PinItem key={pin.title} pin={pin} createSaved={createSaved} deleteSaved={deleteSaved} boards ={boards} />)}
                </div>
                <Link to= "pins/new" >
                    <button type="submit" className='create-pin-button'>+</button>
                </Link>
                {/* <Route path="/pins/:pinId" component={pin_index_item_container} /> */}
            </div>
        )
    }


}

export default PinIndex;