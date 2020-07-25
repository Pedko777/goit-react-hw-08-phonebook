import React, { Suspense, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import PhoneBook from './pages/Contacts/Contacts';
import LoginPage from './pages/LoginPage/LoginPage';
import authOperations from "./redux/auth/authOperations"
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount(){
    this.props.onGetCurrentUser()
  }
  render() {
    return (
      <BrowserRouter>
        <>
          <AppBar />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/contacts" component={PhoneBook} />
            </Switch>
          </Suspense>
        </>
      </BrowserRouter>
    );
  }
}

export default connect(null,{onGetCurrentUser: authOperations.getCurrentUser})(App);
