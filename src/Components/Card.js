import React from 'react'

function Card({props}) {
  return (
    <a className='card-container' href={props.link} target="_blank" rel='noreferrer'>
      <div className='card-dark-cover'></div>
      {props.new && <span className='new-game'>NEW</span>}
      <img src={props.img} alt={props.name} />
      <div className='card-words-cont'>
        <h1>{props.name}</h1>
        <div className='genre-items'>
          {
            props.category.map((value, index) => {
              return <p key={index}>{value}</p>
            })
          }
        </div>
        <div href={props.link} target="_blank" rel='noreferrer' className='get-the-game'>Get the game</div>
      </div>
    </a>
  )
}

export default Card