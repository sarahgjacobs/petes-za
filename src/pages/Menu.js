import React from 'react';
import {MenuList} from '../helpers/MenuList';

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menu-title'>Pete's Menu</h1>
        <div className='menu-items'>{MenuList.map((menuItem, key) => {
            return <div>{menuItem.name}</div>;
        })}

        </div>
    </div>
  )
}

export default Menu