import React from 'react'
import { useParams } from "react-router-dom"
import { allGames } from '../data/all-games';
import Card from './Card';

function Category() {
    const { id } = useParams();

    let games = allGames;

    return (
        <div className="testinging">
            <h1>{id}</h1>
            <div className='cards-cont scroll'>
            {
                games.map((game) => {
                    return game.category.includes(String(id)) ? <Card props={{...game}} key={game.id} /> : null;
                })
            }
            </div>
        </div>
    )
}

export default Category