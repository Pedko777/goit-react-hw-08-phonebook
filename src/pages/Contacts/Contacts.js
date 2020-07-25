import React from 'react';
import ConatctForm from '../../components/conactForm/ContactForm';
import ContactList from '../../components/contactList/ContactList';
import Filter from '../../components/filter/Filter';
import Logo from '../../components/logo/Logo';
import styles from './Contacts.module.css';
// import themeSwitch from '../../services/themeSwitch';


const Contacts = ({ contacts,  isLoadingContact, isAuthenticated }) => {
    // console.log(theme)
  // let themeState = 'light';
  // theme ? (themeState = 'light') : (themeState = 'dark');
  return (
    <div
    //   style={{
    //     color: themeSwitch[themeState].fontColor,
    //     background: themeSwitch[themeState].bodybg,
    //   }}
    >
      <div>
        <>
          <Logo />
          {isLoadingContact && <h2>Loading...</h2>}
          {/* <button onClick={changeTheme}>Change Theme</button> */}
        </>
      </div>
      <ConatctForm />
      <h2 className={styles.sectionTitle}>Contacts</h2>
      {contacts && contacts.length > 1 && <Filter />}
      <ContactList />
    </div>
  );
};

export default Contacts;
