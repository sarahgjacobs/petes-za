import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

  return (
    <nav className="navbar">
        <div className='leftSide'>
      <h1 className="leftside">Pete's Za</h1>
      <LocalPizzaIcon />
      </div>
      <div className='rightSide'>
      <ul className="">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
