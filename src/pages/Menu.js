import React from 'react';
import {MenuList} from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menu-title'>Pete's Za Menu</h1>
        <div className='menu-items'>{MenuList.map((menuItem, key) => {
            return (
            <MenuItem 
            key={key}
            
            name={menuItem.name} 
            toppings={menuItem.toppings}
            price={menuItem.price}
            image={menuItem.image} 
            />
            );
        })}

        </div>
    </div>
  )
}

export default Menu