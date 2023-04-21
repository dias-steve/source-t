import React from 'react';

import './Filter.scss'
import BtnPrimary from '../BtnPrimary/BtnPrimary';
import SearchInput from '../SearchInput/SearchInput';
import SelectorInput from '../SelectorInput/SelectorInput';
import DisplaySelector from '../DisplaySelector/DisplaySelector';

function Filter() {
  return (
    <div className='filter__global_container'>

 
    <SearchInput />
    <SelectorInput/>
    <BtnPrimary />
    <DisplaySelector/>
    </div>
  )
}

export default Filter
