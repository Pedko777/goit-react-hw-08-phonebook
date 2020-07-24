import React from 'react';

import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li>
          <NavLink exact to="/" activeClassName={style.active}>
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" activeClassName={style.active}>
            Register{' '}
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName={style.active}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/phoneBook" activeClassName={style.active}>
            Phone Book
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
