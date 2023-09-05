import React from 'react'
import Form from './Form'
import List from './List'
import { useState, useEffect } from 'react'

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log('okay!', contacts);
  },[contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  }
  return (
    <div>
      Contacts
      <List/>
      <Form addContact={addContact} contacts={contacts}/>
    </div>
  )
}

export default Contacts
