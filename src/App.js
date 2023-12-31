import React, {useState} from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
// import SearchBar from './components/SearchBar';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const [appContacts, setAppContacts] = useState([]);

  const addContact = (newContact) => {
    setAppContacts([...appContacts, newContact]);
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1 className='ui header'>Home</h1>} />
        <Route path="/ContactForm" element={<ContactForm addContact={addContact} />} />
        <Route path="/ContactList" element={<ContactList contactss={appContacts} setContacts={setAppContacts} />} />
      </Routes>
    </Router>
  );
  // return (
  //   // <BrowserRouter>
  //   //   <Routes>
  //   //     <Route index element={<ContactForm addContact={addContact}/>} />
  //   //   </Routes>
     
  //   // </BrowserRouter>
  //   <div>
  //     <h1 className='ui header'>Contact App</h1>
  //     <ContactForm addContact={addContact}/>
  //     <ContactList contactss = {appContacts} setContacts={setAppContacts} />
     
      
  //   </div>
    
  // );
}

export default App;
