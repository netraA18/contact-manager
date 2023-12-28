import React, {useState} from 'react';



const SearchBar = ({contacts, setContacts}) => {
   

    const [searchInput, setSearchInput] = useState("");
    
    const SearchForName = () => {
        console.log("Contact found");
        // Update only the name property of the found contact
        const updatedContacts = contacts.map((contact) => {
            if (contact.name === searchInput) {
                return { ...contact, 
                    name: <mark>{contact.name}</mark> };
                
            }
            return contact;
        });
       
        setContacts(updatedContacts);
        setSearchInput("");

    }; 
   

    return (
        <div className='searchBar'>
          <input type="text" id="searchBarInfo" placeholder="Search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>  
          <button type="submit" id="searchButton" onClick = {() => SearchForName()}>Search</button>
        </div>
    );
};

export default SearchBar;