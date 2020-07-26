import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelector from '../../redux/auth/authSelector';
// import withAuth from "../hoc/withAuth"
// import {withRouter} from "react-router-dom"

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => {
      return isAuthenticated && restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

const mapStateToProps = state => ({
    isAuthenticated: authSelector.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);

// export default withRouter(withAuth(PublicRoute))