import React from "react";
import { fetchPin } from "../../actions/pin_actions";
import SavePin from "./save_pin";
import { Link } from "react-router-dom";

class PinShowItem extends React.Component {
    constructor(props){
        super(props)

        this.navigateback = this.navigateback.bind(this)
    }
componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId)

}

navigateback() {
        this.props.history.push('/')
}
    render() {
        const { pin, saved, boards, createSaved, deleteSaved } = this.props;
        const type = (pin.photoUrl) ? pin.photoUrl : pin.image_url
        
        if (!pin ){
        return null}
        


        return (
            <div className="background-pin-show">
                <div className="back-arrow">
                    <button onClick={this.navigateback}><span className="material-symbols-outlined">arrow_back</span></button>
                </div>
                <div className="show-container">   
                    <div className="show-pin-wrapper">
                        
                        <label className="pin-img-container">
                            <img src={type} alt={pin.title} className="pin-img" />
                        </label> 
                    </div>
                    <div className="pin-text-container">
                            <div className="pin-header-container"> 
                            <SavePin key={pin.title} pin={pin} createSaved={createSaved} deleteSaved={deleteSaved} boards={boards} saved={saved} />


                                {/* <div>
                                    {pin.board_id}
                                    <span className="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </div>
                                <button className="save-button" type="submit">Saved</button> */}
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
                        <Link to={`/pins/${pin.id}/edit`}>
                        <button>
                            <span className="material-symbols-outlined">
                            edit
                        </span>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }


}

export default PinShowItem;