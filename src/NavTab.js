import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar  } from 'react-bootstrap';
import logo from './images/logo.jpg'
import './index.css';

function NavTab() {
  return (
    <Navbar className='Navbar shadow-lg p-3 mb-5' collapseOnSelect expand="lg" fixed="top">
      <div className="">
        <Navbar.Brand>
          <Link to="/">
            <img
              style={{ height: '80px' }}
              src={logo}
              alt="logo"
              className="nav-logo"
            />
          </Link>
        </Navbar.Brand>
   
    
      </div>
    </Navbar>
  );
}

export default NavTab;
