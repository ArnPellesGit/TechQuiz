import React from 'react';
import {NavLink} from "react-router-dom";


const LoggedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to='/'>Find a game</NavLink></li>
            <li><NavLink to='/'>Leaderboards</NavLink></li>
            <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'>EB</NavLink></li>
        </ul>
    )
}

export default LoggedInLinks;