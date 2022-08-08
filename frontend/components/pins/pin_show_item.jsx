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
    this.props.fetchUsers();
    this.props.fetchFollows();

}

navigateback() {
        this.props.history.push('/')
}
    render() {
        const { pin, currentUser, saved, boards, follows, createSaved, deleteSaved, users, createFollow, deleteFollow } = this.props;
        // const type = (!pin.photoUrl) ? pin.image_url : pin.photoUrl 
        const followArr = Object.values(follows)
        // const following = followArr.filter(follow => follow.user_id === pin.creator_id)
        const followers = followArr.filter(follow => follow.follower_id === pin?.creator_id)
        const theyfollow = followArr.filter(follow => follow.user_id === currentUser.id && follow.follower_id === pin?.creator_id)

        if (!pin ){
        return null}
        
        
        
               
        const owner = users[pin.creator_id]
        // debugger
        let newvar = !owner?.username ?  owner?.email : owner?.username ;
        

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
                            <div className="following-container">
                                <div className="user-avatar"></div>
                                <div className="following-text">
                                    <Link to = {`/users/${pin.creator_id}`}>
                                    <div className="following-text-title">{newvar}</div>
                                    </Link>
                                    {/* <span>{following.length} following</span> */}
                                    <span>{followers.length} followers</span>
                                </div>
                            
                            {pin.creator_id === currentUser.id ? null :
                                <div className="unfollow-button-container">
                                    {theyfollow.length > 0 ? 
                                    <button className="create-button" onClick={()=> deleteFollow(theyfollow[0])}>Unfollow</button> :
                                        <button className="create-button" onClick={() => createFollow({ user_id: currentUser.id , follower_id: pin.creator_id}) }>Follow</button> 
                                    }
                                </div>
                            }
                            </div>
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