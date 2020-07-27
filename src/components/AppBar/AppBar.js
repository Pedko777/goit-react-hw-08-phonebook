import React from 'react';
import { connect } from 'react-redux';
import authSelector from '../../redux/auth/authSelector';
import styles from './AppBar.module.css';

import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import themeAction from '../../redux/theme/themeAction';

const AppBar = ({ isAuthenticated, toggleTheme }) => {
  return (
    <header className={styles.header}>
      <Navigation />
      <button type="button" onClick={toggleTheme}>
        {' '}
        Change theme
      </button>
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelector.isAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(themeAction.changeTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
