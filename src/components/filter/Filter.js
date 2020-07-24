import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux"
import contactsAction from '../../redux/contacts/contactsAction';


const Filter = ({ value, onChangeFilter }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <br />
        <input
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        ></input>
      </label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    value: state.contactsRoot.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (text) => dispatch( contactsAction.changeFilter(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);


