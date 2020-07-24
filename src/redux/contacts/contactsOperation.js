import contactsAction from './contactsAction';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const addContact = (name, number) => dispatch => {
  dispatch(contactsAction.addContactRequest());

 axios
    .post('/contacts', {
      name,
      number,
    })
    .then(({ data }) => {
      dispatch(contactsAction.addContactSuccess(data));
    })
    .catch(error => dispatch(contactsAction.addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactsAction.fetchContactsRequest());

  axios('/contacts')
    .then(({ data }) => dispatch(contactsAction.fetchContactsSuccess(data)))
    .catch(error => dispatch(contactsAction.fetchContactsError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(contactsAction.deleteContactRequest());

 axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsAction.deleteContactSuccess(id)))
    .catch(error => dispatch(contactsAction.deleteContactError(error)));
};

const changeContact = (id, name, number) => dispatch => {
  dispatch(contactsAction.changeContactRequest());

  axios
    .patch(`/contacts/${id}`, { number, name })
    .then(({data}) => {
      dispatch(contactsAction.changeContactSuccess({contact:{id: data.id, name: data.name, number: data.number}}));
    })
    .catch(error => dispatch(contactsAction.changeContactError(error)));
};


export default {
  addContact,
  deleteContact,
  fetchContacts,
  changeContact,
};
