import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/ADD_REQUEST');
const addContactSuccess = createAction('contacts/ADD_SUCCESS');
const addContactError = createAction('contacts/ADD_ERROR');

const fetchContactsRequest = createAction('contacts/FETCH_REQUEST');
const fetchContactsSuccess = createAction('contacts/FETCH_SUCCESS');
const fetchContactsError = createAction('contacts/FETCH_ERROR');

const deleteContactRequest = createAction('contacts/DELETE_REQUEST');
const deleteContactSuccess = createAction('contacts/DELETE_SUCCESS');
const deleteContactError = createAction('contacts/DELETE_ERROR');

const changeFilter = createAction('contacts/changeFilter');

const changeContactRequest = createAction ('contacts/CHANGE_CONTACT_REQUEST')
const changeContactSuccess = createAction ('contacts/CHANGE_CONTACT_SUCCESS')
const changeContactError = createAction ('contacts/CHANGE_CONTACT_ERROR')

const addIdEditContact = createAction('contacts/addIdEditContact');
const deleteIdEditContact = createAction('contacts/deleteIdEditContact');


export default {
  addContactRequest,
  addContactSuccess,
  addContactError,

  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,

  changeContactRequest,
  changeContactSuccess,
  changeContactError,

  changeFilter,
  addIdEditContact,
  deleteIdEditContact,
};
