import React from 'react';

import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import routes from '../../routes';
import { connect } from 'react-redux';
import authSelector from '../../redux/auth/authSelector';


const Navigation = ({ isAuthenticated }) => {
  console.log(routes);
  return (
    <nav className={style.nav}>
      {/* {routes.map(route=>)} */}
      {/* {routes.map(route => (
        <NavLink
          exact={route.exact}
          key={route.label}
          to={route.path}
          activeClassName={style.active}
        >
          {route.label}
        </NavLink>
      ))} */}

      <NavLink exact to="/" activeClassName={style.active}>
        Home Page
      </NavLink>

      {isAuthenticated && <NavLink to="/contacts" activeClassName={style.active}>
        Contacts
      </NavLink> }
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelector.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
