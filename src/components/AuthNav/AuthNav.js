import React from 'react';

import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';



const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" activeClassName={style.active} exact>
        Register
      </NavLink>

      <NavLink to="/login" activeClassName={style.active} exact>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;