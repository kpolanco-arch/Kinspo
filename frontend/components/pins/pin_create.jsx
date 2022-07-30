import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import SavePin from "./save_pin";

class PinCreate extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            image_url: '',
            creator_id: this.props.currentUser.id,
            description: '',
            board_id: null,
            photoFile: null,
            photoUrl : null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateback = this.navigateback.bind(this);
        this.handleFile = this.handleFile.bind(this);

    }

    update(val){
        return e => this.setState({[val]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        // const pin = Object.assign({}, this.state)
        

        const formData = new FormData();
        formData.append('pin[title]', this.state.title);
        formData.append('pin[image_url]', this.state.image_url);
        formData.append('pin[description]', this.state.description);
        formData.append('pin[board_id]', this.state.board_id);
        formData.append('pin[creator_id]', this.state.creator_id);


        if (this.state.photoFile) {

            formData.append('pin[photo]', this.state.photoFile);
    }
        this.props.createPin(formData)
}

    handleFile(e) {
        e.preventDefault();
        
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result })
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }

    }

    navigateback(){
        this.props.history.push('/')
    }

    render () {
        const {title, image_url, creator_id, description, board_id} = this.state;
        const {pin, saved, boards, createSaved, deleteSaved } = this.props;
        

        const preview = <div className="create-pin-template">
            <div className="photo-preview-container">
            <img src={this.state.photoUrl}/>
            </div>
        </div>

        return (
            <div className="background-pin-create">
                <div className="back-arrow">
                    <button onClick={this.navigateback}><span className="material-symbols-outlined">arrow_back</span></button>
                </div>
                <div className="show-container">   
                    <div className="create-pin-wrapper">

                        {this.state.photoUrl? preview :

                        <div className="create-pin-template">
                            <div className="create-pin-container">
                                <span className="material-symbols-outlined">
                                    arrow_upward
                                </span>
                                <input type="file" onChange={this.handleFile} />
                                <div className="upload-text">Drag and drop or click to upload</div>
                            </div>
                        </div>}

                    </div>
                    <div className="pin-text-container">
                            <div className="pin-header-container"> 
                            {/* <SavePin key={pin.title} pin={pin} createSaved={createSaved} deleteSaved={deleteSaved} boards={boards} saved={saved} /> */}
                                <div>
                                    <span className="material-symbols-outlined">
                                        expand_more
                                    </span>
            
                                </div>
                                <button className="save-button">Save</button>
                            </div>
                            <div className="pin-header-container">
                            </div>
                            <div className="pin-show-description">
                                <div className="create-pin-form">
                                    <form className="create-pin-form" onSubmit={this.handleSubmit}>
                                        <input className="pin-create-title" type="text" placeholder="Add your title" value={title} onChange={this.update('title')} />
                                        <div className="pin-underline"></div>
                                        <input type="text" placeholder="Add a destination link" value={image_url} onChange={this.update('image_url')} />
                                          

                                        <input type="text" placeholder="Tell everyone what your Pin is about " value={description} onChange={this.update('description')} />
                                        <div className="pin-underline"></div>
                                        {/* <input type="text" placeholder="board" value={board_id} onChange={this.update('board_id')} /> */}
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