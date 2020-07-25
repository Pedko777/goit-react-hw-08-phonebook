import React, { Component } from 'react';
import { connect } from 'react-redux';

import contactsOperation from '../../redux/contacts/contactsOperation';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import themeSelectors from '../../redux/theme/themeSelectors';
import themeAction from '../../redux/theme/themeAction';


import Contacts from './Contacts';

class ContactsContainer extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return <Contacts {...this.props} />;
  }
}

const mapStateToProps = state => {
    // console.log(state)
  return {
    contacts: contactsSelectors.getContacts(state),
    theme: themeSelectors.getTheme(state),
    isLoadingContact: contactsSelectors.getLoading(state),
  };
};

const mapDispatchToProps = dispatch => ({
  changeTheme: () => dispatch(themeAction.changeTheme()),
  onFetchContacts: () => dispatch(contactsOperation.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
