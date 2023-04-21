import React from 'react'
import './TagList.scss';
import iconPlus from '../../assets/icon-plus.svg';

const BtnTag = ({label, withIcon}: {label: string, withIcon?: boolean}) => {
    return(
    <button className={`taglist_btn ${withIcon ? 'withIcon' : ''}` }>
        {withIcon &&
            <img className='icon' src={iconPlus} alt={'icon'} />
            }
        {label}
    </button>)
}

export default function TagList() {
  return (
    <div className='tagList__global_container'>
        <BtnTag label='All'/>
        <BtnTag label='Comedy' withIcon/>
    </div>
  )
}
