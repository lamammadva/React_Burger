import React from 'react'
import {Data} from '../data/Data.js'
import { Menuitem } from './Menuitem.js'
export const Menu = () => {
  return (
    <div className='menudiv1'> 
      <h1>Burgerlerimiz</h1>
      <div className='Menuitemimage'>
        {Data.map((menuItem,key)=>{
          return(
            <Menuitem 
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            description={menuItem.description}
            price={menuItem.price}
            />
          )
        })}
      </div>

    </div>
  )
}
