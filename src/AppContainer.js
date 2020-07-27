import React, { Component } from 'react'
import themeSelectors from "./redux/theme/themeSelectors";
import authOperations from './redux/auth/authOperations';
import { connect } from 'react-redux';
import App from "./App"

class AppContainer extends Component {
    componentDidMount() {
        this.props.onGetCurrentUser();
      }
      render () {
          return <App {...this.props}/>
      }
}


const mapStateToProps = state => {
    return {
      theme: themeSelectors.getTheme(state)
    }
  }
  
  export default connect(mapStateToProps, {
    onGetCurrentUser: authOperations.getCurrentUser,
  })(AppContainer);