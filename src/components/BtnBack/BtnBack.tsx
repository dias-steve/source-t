import React from 'react'
import iconBack from '../../assets/Icon-backward.svg'
import './BtnBack.scss'
function BtnBack() {
  return (
    <button className='btn_back__global_container'>
      <img  src={iconBack} className='btn_back__icon'/> <span className='btn_back__label'>Back to catalog</span>
    </button>
  )
}

export default BtnBack
