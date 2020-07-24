import React from 'react';
import {connect} from "react-redux"
import authSelector from "../../redux/auth/authSelector"
import authOperations from "../../redux/auth/authOperations"

const UserMenu = ({ name, onLogout }) => {
  return (
    <div>
      <span>Welcome, {name}</span>
      <br/>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
    name: authSelector.getUserName(state)
})


export default connect(mapStateToProps, {onLogout: authOperations.logout})(UserMenu);
