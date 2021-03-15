import React from 'react';
import GameSetItem from "./GameSetItem";

const GameLanding = (props) => {
    return(
        <div className="container">
            <div className="card game-landing-container">
                <div className="card-content">
                    <div className="row flex">
                        <div className="col s12 m5 player-content">
                            <i className="large material-icons">account_circle</i>
                            <h5>
                                Elias
                            </h5>
                            <h5>
                                Rating: 102
                            </h5>
                        </div>
                        <div className="col s12 m2 score-content">
                            <span>0-0</span>
                        </div>
                        <div className="col s12 m5 player-content">
                            <i className="large material-icons">account_circle</i>
                            <h5>
                                Pelle
                            </h5>
                            <h5>
                                Rating: 120
                            </h5>
                        </div>
                    </div>
                </div>
                <GameSetItem/>
                <div className="row">
                    <div className="container">
                    <div className="col s12 m12">
                        <button className="btn blue lighten-1 z-depth-0 play-button">Play</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameLanding;