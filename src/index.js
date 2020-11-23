import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Form from './components/Form';
import View from './components/View';

import {fetchAPI} from './api';

const App = () => {
  const [contacts, setContacts] = useState([]);
  /*
  function addNewContact(newContact) {
    setContacts([newContact, ...contacts]);
    console.log(contacts);
  };

  fetchAPI("/contacts/295", "DELETE").then((data) => {
    console.log(data);
  });
  */
useEffect(() => {
  fetchAPI("/contacts").then((data) => {
    const {contacts} = data;
    setContacts(contacts);
    console.log(contacts);
  }).catch((error) => {
    console.error(error);
  });
}, []);

  return (
    <>
    <header>
      <h1>Welcome to Contact Book!</h1>
    </header>
    <main>
      <Form
        contacts={contacts}
        setContacts={setContacts}
         />
      <View
        contacts={contacts}
        setContacts={setContacts} />
    </main>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);