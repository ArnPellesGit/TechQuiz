

/**
 * This function tries to create a game invite to a new game to the opponent.
 * @param opponentID - the ID of the opponent to be invited.
 * @param opponentName - the name of the opponent.
 * @returns - dispatch of type success or failure depending on state.
 * */
export const createGameInvitation = (opponentID, opponentName) => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const username = getState().firebase.profile.userName;
        console.log(username, "The user name that wants to invite to game")
        const userID = getState().firebase.auth.uid;

        firestore.collection('gameInvitations').add({
            sentReqUserName: username,
            gotReqUserName: opponentName,
            sentRequestID: userID,
            gotRequestID: opponentID,
            isAccepted: false,
            isRejected: false
        }).then(() => {console.log("Succesfully created a game invitation");dispatch({type: "GAME_INVITATION_ADDED_SUCCESS"})})
            .catch((error) => {dispatch({type: "GAME_INVITATION_ERROR_FAILURE", error});});
    }
}

/**
 * This function tries to accept a game invitation.
 * @param invitationID - the ID of the game invitation entry.
 * @returns - dispatch of type success or failure depending on state.
 * */
export const acceptGameInvitation = (invitationID) => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection('gameInvitations').doc(invitationID).update({
            isAccepted: true
        }).then(() => dispatch({type: "ACCEPTED_INVITATION_SUCCESS"}))
            .catch((error) => dispatch({type: "ACCEPTED_INVITATION_FAILURE", error}))
    }
}

/**
 * This function tries to reject a game invitation.
 * @param invitationID - the ID of the game invitation entry.
 * @returns - dispatch of type success or failure depending on state.
 * */
export const rejectGameInvitation = (invitationID) => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection('gameInvitations').doc(invitationID).update({
            isRejected: true
        }).then(() => dispatch({type: "REJECTED_INVITATION_SUCCESS"}))
            .catch((error) => dispatch({type: "REJECTED_INVITATION_FAILURE", error}))
    }
}
