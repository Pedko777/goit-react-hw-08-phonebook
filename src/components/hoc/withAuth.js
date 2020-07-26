import React from 'react';
import { connect } from "react-redux"
import authSelector from "../../redux/auth/authSelector"

const withAuth = WrappedComponent => {
  function WithAuth(props) {
    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = state => ({
    isAuthenticated: authSelector.isAuthenticated(state),
});

return connect(mapStateToProps)(WithAuth);
};

export default withAuth;


