import React from 'react';
import { connect } from 'react-redux';
import authSelector from '../../redux/auth/authSelector';
import styles from './AppBar.module.css';

import AuthNav from "../AuthNav/AuthNav"
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';


const AppBar = ({ isAuthenticated }) => {
    // console.log(isAuthenticated)
  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav/> }
    </header>
  );
};

const mapStateToProps = state => ({
    isAuthenticated: authSelector.isAuthenticated(state),
  }
);

export default connect(mapStateToProps)(AppBar);
