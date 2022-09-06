import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  let activeStyle = {
    borderBottom: '.25rem solid #2569A5',
  };

  return (
    <nav className='relative p-10 lg:p-20 navbar-box-shadow'>
      <div className='absolute bottom-0 space-x-10'>
        <NavLink
          to='/'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to='/coin-list'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Coin List
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
