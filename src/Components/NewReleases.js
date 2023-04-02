import React from 'react'
import { data } from "../data/new-games.js"
import Card from './Card.js'
import { Link } from "react-router-dom"

function NewReleases() {
  return (
    <section className='new-section'>
      <h1>New Releases</h1>
      <div className='cards-cont'>
        {
          data.map((game) => {
            return <Card props={{ ...game }} key={game.id} />
          })
        }
      </div>
      <Link to="/library/" className='see-more-button white-font'>See more games</Link>
    </section>
  )
}

export default NewReleases