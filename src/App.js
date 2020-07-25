import React, { Suspense, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Contacts from './pages/Contacts/ContactsContainer';
import LoginPage from './pages/LoginPage/LoginPage';

import authOperations from "./redux/auth/authOperations"
import { connect } from 'react-redux';
import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from './components/Route/PublicRoute';

class App extends Component {
  componentDidMount(){
    this.props.onGetCurrentUser()
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <AppBar />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <PublicRoute path="/" exact component={HomePage} restricted={false}/>
              <PublicRoute path="/login" exact component={LoginPage} restricted={true}/>
              <PrivateRoute path="/contacts" exact component={Contacts}/>
              {/* <PublicRoute path="/register" restricted={false} component={RegisterPage}/> */}
              {/* <PublicRoute path="/login" restricted={true} component={LoginPage}/> */}

              {/* <Route exact path="/" component={HomePage} /> */}
              {/* <Route path="/register" component={RegisterPage} /> */}
              {/* <Route path="/login" component={LoginPage} /> */}
              {/* <Route path="/contacts" component={Contacts} /> */}
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null,{onGetCurrentUser: authOperations.getCurrentUser})(App);
