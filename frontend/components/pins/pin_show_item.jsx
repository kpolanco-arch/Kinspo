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
    this.props.fetchUsers();
    this.props.fetchFollows();
    this.props.fetchPin(this.props.match.params.pinId)

}

navigateback() {
        this.props.history.push('/')
}
    render() {
        const { pin, currentUser, saved, boards, follows, createSaved, deleteSaved, users, createFollow } = this.props;
        // const type = (!pin.photoUrl) ? pin.image_url : pin.photoUrl 
        const followArr = Object.values(follows)
        const followers = followArr.filter(follow => follow.user_id === pin.creator_id)
        // const following = followArr.filter(follow => follow.follower_id === user.id)
        const theyfollow = followArr.filter(follow => follow.user_id === currentUser.id && follow.follower_id === pin.creator_id)

        if (!pin ){
        return null}
        
        
        

        const owner = users[pin.creator_id]
        
        var newvar = (!owner.username) ?  owner.email : owner.username ;
        // if (typeof (owner.username) === 'undefined' || (owner.username)=== null) {
        //     var newvar = owner.email
        // }

        return (
            <div className="background-pin-show">
                <div className="back-arrow">
                    <button onClick={this.navigateback}><span className="material-symbols-outlined">arrow_back</span></button>
                </div>
                <div className="show-container">   
                    <div className="show-pin-wrapper">
                        
                        <label className="pin-img-container">
                            <img src={(!pin.photoUrl) ? pin.image_url : pin.photoUrl} alt={pin.title} className="pin-img" />
                        </label> 
                    </div>
                    <div className="pin-text-container">
                            <div className="pin-header-container"> 
                            <SavePin key={pin.title} pin={pin} createSaved={createSaved} deleteSaved={deleteSaved} boards={boards} saved={saved} />

                            </div>
                            <div className="pin-header-container">
                                <h1>{pin.title}</h1> 
                            </div>
                                <div className="pin-show-description">
                                    {pin.description}
                                </div>
                            <div className="user-avatar"></div>
                            <div>
                                <h3>{newvar}</h3>
                                <span>{followers.length} followers</span>
                            </div>
                            {pin.creator_id === currentUser.id ? null :
                            <div>
                                {theyfollow.length > 0 ? 
                                <button>Unfollow</button> :
                                    <button onClick={() => createFollow({ user_id: currentUser.id , follower_id: pin.creator_id}) }>Follow</button> 
                                }
                            </div>
                            }
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