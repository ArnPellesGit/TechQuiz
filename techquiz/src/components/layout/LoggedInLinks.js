import React from 'react';
import {NavLink} from "react-router-dom";


const LoggedInLinks = (props) => {
    return(
        <>
            <li><NavLink to='/findgame'>Find a game</NavLink></li>
            <li><NavLink to='/leaderboard'>Leaderboards</NavLink></li>
            <li><a href="/home" onClick={props.signOut}>Log out</a></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'>AS</NavLink></li>
        </>
    )
}

export default LoggedInLinks;

