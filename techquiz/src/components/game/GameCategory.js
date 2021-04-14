import React from 'react';
import GameVsCategoryInfo from "./GameVsCategoryInfo";
import {Link, Redirect} from "react-router-dom";

const GameCategory = ({game, opponent, profile, userStat, score, isYourTurn, auth, localGame, fetchQuestions, gamingID}) =>  {
    const [selectedCategories, setSelectedCategories]= React.useState("");
    if(!auth.uid) {
        return <Redirect to="/signin"/>
    }
    console.log(selectedCategories, "chosen category")

    return (
        (game && userStat) ?
        <div className="container">
            <div className="card game-landing-container">
                <GameVsCategoryInfo game={game} opponent={opponent} profile={profile} userStat={userStat}/>
                <div className="card-content">
                    <div className="container">
                        <div className="row flex">
                    {localGame.selectedCategories && localGame.selectedCategories.map((category => {
                        return (
                            <div key={category.tags}  className="col s12 m6 game-category-col">
                                <div id={category.tags} onClick={e => {setSelectedCategories(e.target.id)}} className="card category-title-container" tabIndex="1">
                                    <div id={category.tags} className="category-title" onClick={e => {setSelectedCategories(e.target.id)}}>
                                        {category.category}
                                    </div>
                                </div>
                            </div>)
                    }))}
                        </div>
                    </div>
                </div>

                <div className="card-content">
                        <div className="container">
                            <Link to={'/quiz-landing/' + gamingID}>
                                <button className="btn blue lighten-1 z-depth-0 play-button" onClick={() => {fetchQuestions(gamingID,selectedCategories)}}>Play</button>
                            </Link>
                        </div>
                </div>
            </div>
        </div> : <img src={"http://www.csc.kth.se/~cristi/loading.gif"} alt={"waiting for data"}/>
    )
}

export default GameCategory;
