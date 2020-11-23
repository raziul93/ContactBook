import React from 'react';
import form from './Form';
import {fetchAPI} from '../api'

const view = ({
  contacts,
  setContacts,
}) => {

  return (
    <div className="contacts-view">
      {contacts.map((contact) => {
        const comments = contact.comments;
        //console.log(comments);
        
        return (
        <section
          className="contact"
          key={contact.id}>
          <div className="contact-info">
            <h2>{contact.name}</h2>
            <h3>{contact.contactType}</h3>
            <h3>{contact.email}</h3>
            <h3>{contact.phoneNumber}</h3>
          </div>
          <div className="address-comments">
            <h3>{contact.address}</h3>
          </div>
        </section>
      )}
      )}
    </div>
  );
}

export default view