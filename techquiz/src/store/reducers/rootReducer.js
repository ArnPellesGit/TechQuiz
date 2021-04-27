import authReducer from "./authReducer";
import profileStatsReducer from "./profileStatsReducer";
import matchQueueReducer from "./matchQueueReducer";
import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";
import gameReducer from "./gameReducer";
import friendReducer from "./friendReducer";
import gameInvitationReducer from "./gameInvitationReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    profileStats: profileStatsReducer,
    matchQueue: matchQueueReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    game: gameReducer,
    friends: friendReducer,
    gameInvitation: gameInvitationReducer
});

export default rootReducer;
