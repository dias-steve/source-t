import React from 'react';
import './ListMovies.scss';
import BtnPrimary from '../BtnPrimary/BtnPrimary';

import withMovieCardListContainer from './MovieCardListContainer';
import MovieCard from '../MovieCard/MovieCard';

function ListMovies() {

  const MovieCardList=withMovieCardListContainer(MovieCard)
  return (
    <div className='listmovie__global_container'>
      <div className='listmovie_header'>
        <h2 className='listmovie_title'>Titles<span>(12)</span></h2>
        <BtnPrimary label='Delete Selecttion' isRed={true}/>
      </div>

      <div className='listmovie_list_container'>
      <MovieCardList/>
      </div>
     
    </div>
  )
}

export default ListMovies
