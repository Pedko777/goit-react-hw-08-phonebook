import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import routes from './routes';

import themeSwitch from './services/themeSwitch';
import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from './components/Route/PublicRoute';

const App = ({ theme }) => {
  let themeState = 'light';
  theme ? (themeState = 'light') : (themeState = 'dark');

  return (
    <BrowserRouter>
      <div
        style={{
          color: themeSwitch[themeState].fontColor,
          background: themeSwitch[themeState].bodybg,
        }}
      >
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
};

export default App;
