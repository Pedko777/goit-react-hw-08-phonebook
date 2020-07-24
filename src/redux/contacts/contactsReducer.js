import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsAction from './contactsAction';

const onAddContact = (state, action) => {
  return [...state, action.payload];
};

const onDeleteContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const onChangeContact = (state, action) => {
  // console.log(action.payload.contact);
  return state.map(contact => {
    return contact.id === action.payload.contact.id
      ? action.payload.contact 
      : contact;
  });
};

const contacts = createReducer([], {
  [contactsAction.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsAction.addContactSuccess]: onAddContact,
  [contactsAction.deleteContactSuccess]: onDeleteContact,
  [contactsAction.changeContactSuccess]: onChangeContact,
  // [contactsAction.changeContact]: onChangeContact,
});

const onAddIdEditContact = (state, { payload }) => {
  return [...state, payload];
};

const onDeleteIdEditContact = (state, { payload }) => {
  return state.filter(id => id !== payload);
};

const idEditContact = createReducer([], {
  [contactsAction.addIdEditContact]: onAddIdEditContact,
  [contactsAction.deleteIdEditContact]: onDeleteIdEditContact,
});

const onChangeFilter = (state, { payload }) => {
  return payload;
};

const filter = createReducer('', {
  [contactsAction.changeFilter]: onChangeFilter,
});

const loading = createReducer(false, {
  [contactsAction.fetchContactsRequest]: () => true,
  [contactsAction.fetchContactsSuccess]: () => false,
  [contactsAction.fetchContactsError]: () => false,
  [contactsAction.addContactRequest]: () => true,
  [contactsAction.addContactSuccess]: () => false,
  [contactsAction.addContactsError]: () => false,
  [contactsAction.deleteContactRequest]: () => true,
  [contactsAction.deleteContactSuccess]: () => false,
  [contactsAction.deleteContactError]: () => false,
  [contactsAction.changeContactRequest]:()=> true,
  [contactsAction.changeContactSuccess]: ()=> false,
  [contactsAction.changeContactError]: ()=> false,
});

export default combineReducers({
  contacts,
  idEditContact,
  filter,
  loading,
});
