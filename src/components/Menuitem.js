import React from 'react'
import '../styles/Menu.css'
import { colors } from '@mui/material'
export const Menuitem = ({image,name,description,price}) => {
  return (
    <div  className='menudiv2'>
       <div className='menuimage' style={{backgroundImage:`url(${image})`}}></div>
       <div className='menutitle'>
        <h1 className='title'> {name}</h1>
        <h6 className='menudescription'>{description}</h6>
        <h4 className='menuprice'>{price}TL</h4>

       </div>
    </div>
  )
}
