import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  const { user, googleLogOut } = useAuth();
  console.log(user);

  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        <span className={{ color: 'white' }}>{user.displayName}</span>
        {user.email ? (
          <NavLink to="/logout">
            <button onClick={googleLogOut}>LogOut</button>
          </NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;