import React from 'react'
import './Wishlist.scss'
import Filter from '../Filter/Filter'
import ListMovies from '../ListMovies/ListMovies'
import TagList from '../TagList/TagList'

function Wishlist() {
  return (
    <div className='wishlist__global_container'>
        <div className='wishlist__header_container'>
        <h1 className='wishlist_title'>Wishlist</h1>
        <div className='wishlist_filter_container'>
            <Filter /> 
        </div>
 

  
        </div>
        <div className='wishlist_tag_container'>
            <TagList /> 
        </div>
        <ListMovies/>

    </div>
  )
}

export default Wishlist
