import { connect } from 'react-redux';
import contactsOperation from '../../redux/contacts/contactsOperation';
import contactsAction from '../../redux/contacts/contactsAction';
import ContactListItem from "./ContactListItem"

const mapStateToProps = (state, { id }) => {
    const arrayIdsEditContact = state.contactsRoot.idEditContact;
    const isShowForm = arrayIdsEditContact.some(idEdit => idEdit === id);
    return {
      isShowForm,
    };
  };
  
  const mapDispatchToProps = (dispatch, { id }) => {
    return {
      deleteContact: () => dispatch(contactsOperation.deleteContact(id)),
      changeContact: (name, number) =>
        dispatch(contactsOperation.changeContact(id, name, number)),
      addIdEditContact: () => dispatch(contactsAction.addIdEditContact(id)),
      deleteIdEditContact: () => dispatch(contactsAction.deleteIdEditContact(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);