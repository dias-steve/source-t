import React from 'react';
import './SearchInput.scss';
import searchIcon from '../../assets/Icon-search.svg'

function SearchInput() {
  return (
    <div className='searchinput__global_container'>
      <input className='searchinput__input' type='text' />
    <img src={searchIcon} className='searchinput__search_icon' />
    </div>
  )
}

export default SearchInput
