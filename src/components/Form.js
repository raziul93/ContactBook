import React, { useState } from 'react';
import { fetchAPI } from '../api';

const form = ({contacts, setContacts}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [contactType, setContactType] = useState('personal');

  return (
    <div className="form-view">
    <form onSubmit={async (event) => {
      event.preventDefault();

      const contactData = {
        name,
        address,
        phoneNumber,
        email,
        contactType,
      };
      
      console.log("contactData: ", contactData)

      try {
        const newContact = await fetchAPI("/contacts", "POST", contactData);
        console.log("newContact:", newContact);
        console.log(".contact: ", newContact.contact);
        setContacts([newContact.contact, ...contacts]);
        console.log(contacts);
      } catch (error) {
        console.error(error);
      }

    }}>
      <input type="text" placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)} />
      <input type="text" placeholder="Address"
        value={address}
        onChange={(event) => setAddress(event.target.value)} />
      <input type="text" placeholder="Phone Number (include dashes and area code)"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)} />
      <input type="text" placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)} />
      <textarea placeholder="Comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)} />
      <fieldset>
        <legend>Contact Type</legend>
        <label><input type="radio" name="contact-type"
          value="personal"
          checked={contactType === 'personal'}
          onClick={() => setContactType('personal')}
          readOnly={true} />Personal</label>
        <label><input type="radio" name="contact-type"
          value="work"
          checked={contactType === 'work'}
          onClick={() => setContactType('work')}
          readOnly={true} />Work</label>
        <label><input type="radio" name="contact-type"
          value="other"
          checked={contactType === 'other'}
          onClick={() => setContactType('other')}
          readOnly={true} />Other</label>
      </fieldset>
      <button
        disabled={name === ''}>Create Contact</button>
    </form>
    </div>
  );
};

export default form;