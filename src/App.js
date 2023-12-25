import React, {useState} from 'react';
import './App.css';
import ContactList from './components/ContactList';
import contacts from './data/contacts';
import ContactForm from './components/ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);

  /*...creates a new array that includes elements of the existing
  contacts array and appends the new contact to end of it*/
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  }
  return (
    <div>
      <h1 className='ui header'>Contact App</h1>
      <ContactList contacts = {contacts} />
      <ContactForm addContact={addContact}/>
    </div>
    
  );
}

export default App;
