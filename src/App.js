import React, { Suspense, Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import routes from './routes';

import authOperations from './redux/auth/authOperations';
import { connect } from 'react-redux';
import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from './components/Route/PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <AppBar />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map(route => {
                return route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute
                    key={route.label}
                    {...route}
                    restricted={route.restricted}
                  />
                );
              })}
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
