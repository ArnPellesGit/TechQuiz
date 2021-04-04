import React from 'react';
import GameVsCategoryInfo from "./GameVsCategoryInfo";

const categories = [
    {name: "Linux", id: 1},
    {name: "Java", id: 2},
    {name: "MySQL", id: 3 },
    {name: "PHP", id: 4}
]

const GameCategory = (props) =>  {
    return (
        <div className="container">
            <div className="card game-landing-container">
                <GameVsCategoryInfo/>
                <div className="row">
                    {categories.map((category => {
                        return (
                            <div key={category.id} className="col s12 m6">
                                <div className="card category-title">
                                    {category.name}
                                </div>
                            </div>)
                    }))}
                </div>

                <div className="row">
                        <div className="col s12 m12">
                            <button className="btn blue lighten-1 z-depth-0 play-button">Play</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default GameCategory;