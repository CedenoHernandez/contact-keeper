import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Bob Smith',
        email: 'bob@aol.com',
        phone: '408-232-1444',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sue K',
        email: 'sue1@aol.com',
        phone: '408-423-9999',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Kevin Johnson',
        email: 'kevin@gmail.com',
        phone: '408-666-3422',
        type: 'professional'
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = 1000;
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Contact
  
  //Filter Contacts

  // Clear Filter 

  return (
    <ContactContext.Provider
     value={{
       contacts: state.contacts,
       current: state.current,
       addContact,
       deleteContact,
       setCurrent,
       clearCurrent
     }}>
      { props.children }
    </ContactContext.Provider>
  )

};

export default ContactState;