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
            <div className="background-pin-create">
                <div className="back-arrow">
                    <button onClick={this.navigateback}><span class="material-symbols-outlined">arrow_back</span></button>
                </div>
                <div className="show-container">   
                    <div className="create-pin-wrapper">
                        <div className="create-pin-template">
                            <div className="create-pin-container">
                                <span class="material-symbols-outlined">
                                    arrow_upward
                                </span>
                                <div className="upload-text">Drag and drop or click to upload</div>
                            </div>
                        </div>    
                    </div>
                    <div className="pin-text-container">
                            <div className="pin-header-container"> 
                                <div>
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
            
                                </div>
                                <button className="save-button" type="submit">Save</button>
                            </div>
                            <div className="pin-header-container">
                            </div>
                            <div className="pin-show-description">
                                <div className="create-pin-form">
                                    <form className="create-pin-form" onSubmit={this.handleSubmit}>
                                        <input className="pin-create-title" type="text" placeholder="Add your title" value={title} onChange={this.update('title')} />
                                        <div className="pin-underline"></div>
                                        <input type="text" placeholder="Image link" value={image_url} onChange={this.update('image_url')} />

                                        <input type="text" placeholder="Tell everyone what your Pin is about " value={description} onChange={this.update('description')} />
                                        <div className="pin-underline"></div>
                                        <input type="text" placeholder="board" value={board_id} onChange={this.update('board_id')} />
                                        <button type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(PinCreate);