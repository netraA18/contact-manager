import React, {useState} from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';

function App() {
  const [appContacts, setAppContacts] = useState([]);

  const addContact = (newContact) => {
    setAppContacts([...appContacts, newContact]);
  }
  return (
    <div>
      <h1 className='ui header'>Contact App</h1>
      <ContactForm addContact={addContact}/>
      <ContactList contactss = {appContacts} setContacts={setAppContacts} />
     
      
    </div>
    
  );
}

export default App;
