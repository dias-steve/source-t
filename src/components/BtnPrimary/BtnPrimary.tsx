import React from 'react'
import './BtnPrimary.scss'
function BtnPrimary({label, isRed}: {label?: string, isRed?: boolean}) {
    
  return (
    <button className={`btn_primary__global_container ${isRed ? 'red': ''}`}>
      {label || 'Add a movie'}
    </button>
  )
}

export default BtnPrimary
