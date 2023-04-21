import React from 'react'
import iconGrid from '../../assets/icon-grid.svg';
import iconList from '../../assets/icon-list.svg'
import './DisplaySelector.scss'

const BtnSelector = ({icon, isActive} : {icon: string, isActive: boolean}) => {
    return (
        <button className={`display_selector_btn ${isActive ? 'active' : ''}`}>
            <img src={icon} alt={'icon'} />
        </button>
    )
}

function DisplaySelector() {
  return (
    <div className='display_slector__global_container'>
      <BtnSelector icon={iconGrid} isActive={true}/>
      <BtnSelector icon={iconList} isActive={false}/>
    </div>
  )
}

export default DisplaySelector
