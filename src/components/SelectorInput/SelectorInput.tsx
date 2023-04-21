import React from 'react';
import './SelectorInput.scss'

import arrowIcon from '../../assets/icon-arrow-down.svg'

function SelectorInput() {
  return (
    <div className='selector_input__global_container'>
  
      <select className='selector_input__select' name="type">
        <option value= "Recently Add">Recently Added</option>
      </select>
      <img className='selector_input__icon' src={arrowIcon} alt='icon'/>
    </div>
  )
}

export default SelectorInput
