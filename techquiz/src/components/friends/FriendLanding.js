import React from 'react';
import {Redirect} from 'react-router-dom';
import FriendItem from "./FriendItem";
import FriendRequestItem from "./FriendRequestItem";
import {Link} from "react-router-dom";

const FriendLanding = ({auth, friends, friendSearch, setUsername}) => {

    if(!auth.uid){
        return <Redirect to="/signin"/>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m4">
                    <h5 className="grey-text text-darken-3 center">Friends Requests</h5>
                    <div className="col s12 m12">

                        <div className="card">
                            <div className="card-content">
                                <FriendRequestItem/>
                                <FriendRequestItem/>
                                <FriendRequestItem/>
                                <FriendRequestItem/>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="col s12 m8">
                        <form className="white"
                              onChange={(e) => {e.preventDefault();}}>
                            <h5 className="grey-text text-darken-3">Friends & Users</h5>
                            <div className="input-field">
                                <input type="text" id="userName" name="userName" placeholder="Search for users.."
                                       onChange={e => {setUsername(e.target.value)}}/>
                            </div>
                        </form>
                        <div>
                            <div className="col s12 m12 col-padding-friend-landing">
                                <h6 className="grey-text text-darken-3 title-underline-users">Your added friends</h6>
                            </div>
                        {friends && Object.entries(friends).map((friend) => {
                            return(
                                <Link to={'/profile-preview/' + friend[0]} key={friend[0]}>
                                    <FriendItem friend={friend[1]}/>
                                </Link>
                            )
                        })}
                        </div>
                        <div className="col s12 m12 col-padding-friend-landing">
                            <h6 className="grey-text text-darken-3 title-underline-users">All users</h6>
                        </div>

                        <div>
                        {friends && Object.entries(friends).map((friend) => {
                            return(
                                <Link to={'/profile-preview/' + friend[0]} key={friend[0]}>
                                    <FriendItem friend={friend[1]}/>
                                </Link>
                            )
                        })}
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default FriendLanding;