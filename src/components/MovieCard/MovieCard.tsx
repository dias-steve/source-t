import React from 'react'
import './MovieCard.scss';

function MovieCard({title, imageScr, tag}: {title: string, imageScr: string, tag?: string}){
    return(
    <div className='movie_card__global_container'>
        <img src={'/'+imageScr} />
        <h2>{title}</h2>
    </div>
  )
}

export default MovieCard
