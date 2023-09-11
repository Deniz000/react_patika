import React from 'react'
import Form from './Form'
import List from './List'
import './Contacts.css'
import { useState, useEffect } from 'react'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'John',
      phone_number: '0123'
    },
    {
      fullname: 'Mehmet',
      phone_number: '456'
    },
    {
      fullname: 'Nazlı',
      phone_number: '789'
    },
  ]);

  useEffect(() => {
    console.log('okay!', contacts);
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  }
  return (
    <div id='container'>
      <h1>CONTACT LİST</h1>
      <List contacts={contacts} />
      <Form addContact={addContact} contacts={contacts} />
    </div>
  )
}

export default Contacts
