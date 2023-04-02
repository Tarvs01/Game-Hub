import React from 'react'
import { allGames } from '../data/all-games'
import Card from "./Card"

function All() {

    function shuffle(array){
        for (let i = array.length-1; i>0; i--){
            let j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(allGames);

    let games = allGames;

  return (
    <div className='testinging'>
        <h1>All Games</h1>
        <div className='cards-cont scroll'>
            {
                games.map((game) => {
                    return <Card props={{...game}} key={game.id} />
                })
            }
        </div>
    </div>
  )
}

export default All