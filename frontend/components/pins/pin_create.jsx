import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class PinCreate extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            image_url: '',
            creator_id: this.props.currentUser.id,
            description: '',
            board_id: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateback = this.navigateback.bind(this)

    }

    update(val){
        return e => this.setState({[val]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const pin = Object.assign({}, this.state)
        this.props.createPin(pin)
    }

    navigateback(){
        this.props.history.push('/')
    }

    render () {
        const {title, image_url, creator_id, description, board_id} = this.state;
        return (
            <div>
                <button onClick={this.navigateback}>X</button>
                <h1>Create a Pin</h1>
                <div className="create-pin-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Title</label>
                        <input type="text" value={title} onChange ={this.update('title')}/>

                        <label>Image Link</label>
                        <input type="text" value={image_url} onChange={this.update('image_url')} />

                        <label>Description</label>
                        <input type="text" value={description} onChange={this.update('description')} />

                        <label>Board</label>
                        <input type="text" value={board_id} onChange={this.update('board_id')} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(PinCreate);