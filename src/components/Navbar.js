import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="">Pete's Za</h1>
      <ul className="">
        <li className="">
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li className="">
          <Link to="/about" className="">
            About
          </Link>
        </li>
        <li className="">
          <Link to="/menu" className="">
            Menu
          </Link>
        </li>
        <li className="">
          <Link to="/contact" className="">
            Contact
          </Link>
        </li>
      </ul>
      <div className=""></div>
    </nav>
  );
}

export default Navbar;
