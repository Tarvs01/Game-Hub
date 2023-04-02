import React from 'react'

function Article({news}) {
  return (
    <div className='article-container'>
      <img src={news.img} alt={news.name} />
      <div className='article-words-cont'>
        <h1>{news.title}</h1>
        <p>{news.content}</p>
        <a href={news.link} target="_blank" rel='noreferrer'>Read more</a>
      </div>
    </div>
  )
}

export default Article