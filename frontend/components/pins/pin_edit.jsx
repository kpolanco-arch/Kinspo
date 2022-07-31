import React from "react";
import { withRouter } from "react-router-dom";

class PinEdit extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.pin;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateback = this.navigateback.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.match.params.pinId)
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePin(this.state)
    }

    update(val) {
        return e => this.setState({ [val]: e.target.value })
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

    navigateback() {
        this.props.history.push('/')
    }

    render () {
        // const { title, image_url, creator_id, description, board_id } = this.props;
        const { pin, saved, boards, createSaved, deleteSaved } = this.props;

        console.log(pin)

        const preview = <div className="create-pin-template">
            <div className="photo-preview-container">
                <img src={pin.photoUrl} />
            </div>
        </div>

        return (
            <div className="background-pin-create">
                <div className="back-arrow">
                    <button onClick={this.navigateback}><span className="material-symbols-outlined">arrow_back</span></button>
                </div>
                <div className="show-container">
                    <div className="create-pin-wrapper">

                        {pin.photoUrl ? preview :
                            <div className="create-pin-template">
                                <div className="photo-preview-container">
                                    <img src={pin.image_url} alt={pin.title} className="pin-img" />
                                </div>
                                {/* <div className="create-pin-container">
                                    <input className="input-file" type="file" onChange={this.handleFile} />
                                    <span className="material-symbols-outlined">
                                        arrow_upward
                                    </span>

                                    <div className="upload-text">Drag and drop or click to upload</div>
                                </div> */}
                            </div>}

                    </div>
                    <div className="pin-text-container">
                        <div className="pin-header-container">
                            
                        </div>
                        <div className="pin-header-container">
                        </div>
                        <div className="pin-show-description">
                            <div className="create-pin-form">
                                <form className="create-pin-form" onSubmit={this.handleSubmit}>
                                    <input className="pin-create-title" type="text" defaultValue={pin.title} onChange={this.update('title')} />
                                    <div className="pin-underline"></div>

                                    <input type="text" placeholder="Tell everyone what your Pin is about " value={pin.description} onChange={this.update('description')} />
                                    <div className="pin-underline"></div>
                                    {/* <input type="text" placeholder="board" value={board_id} onChange={this.update('board_id')} /> */}
                                    <div className="destination">
                                        <input className="destination-text" type="text" placeholder="Add a destination link (Optional)" value={pin.image_url} onChange={this.update('image_url')} />
                                        <div className="pin-underline"></div>
                                    </div>
                                    <button className="save-button" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default PinEdit;