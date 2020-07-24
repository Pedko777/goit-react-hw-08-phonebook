import React from 'react';
import styles from './contactList.module.css';
import { connect } from 'react-redux';
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import ContactListItem from "../contactListItem/ContactListIemContainer"

const ContactList = ({ contacts }) => {
  // console.log(contacts);
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} id={contact.id} />
      ))}
    </ul>
  );
};


const mapStateToProps = state => {
  return { contacts: contactsSelectors.getFilteredContacts(state)}
};

export default connect(mapStateToProps)(ContactList);
