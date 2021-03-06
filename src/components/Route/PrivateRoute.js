import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelector from '../../redux/auth/authSelector';
// import withAuth from "../hoc/withAuth";
// import {withRouter} from "react-router-dom"

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={props => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

const mapStateToProps = state => {
  return { isAuthenticated: authSelector.isAuthenticated(state) };
};

export default connect(mapStateToProps)(PrivateRoute);
// export default withRouter(withAuth(PrivateRoute))