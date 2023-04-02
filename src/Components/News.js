import React from 'react'
import {news} from "../data/news"
import Article from './Article'
import { Link } from 'react-router-dom'

function News() {
  return (
    <section className='new-section news-section'>
        <h1>Esports News</h1>
        <Article news={{...news[0]}} key={news[0].id} />
        <Article news={{...news[1]}} key={news[1].id} />
        <Link to="/esports" className='see-more-button black-font'>Read more news</Link>
    </section>
  )
}

export default News