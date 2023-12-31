import React, {useState, useEffect} from 'react';



const SearchBar = ({contacts, setContacts}) => {

    const [searchInput, setSearchInput] = useState("");

    const SearchForName = () => {
        
        const updatedContacts = contacts.map((contact) => {
            if (contact.name === searchInput) {
                console.log("when checking the searchInput in search Bar: " + contact.name);
                return { ...contact, 
                    name: <mark>{contact.name}</mark> };       
            }  
            return contact;
        });

        setContacts(updatedContacts);
        // setSearchInput("");
   
    }; 
    useEffect(() => {
        const handleClick = (e) => {
            if (!e.target.closest('.searchBar')) { 
                
                const updatedContacts = contacts.map((contact) => {

                    const nameValue = typeof contact.name === 'string' ? contact.name : contact.name.props.children;
                    if(nameValue === searchInput) { 
                        return {...contact, name: nameValue};
                    }
                    return contact;
                });

                setContacts(updatedContacts);
            }
        };

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [contacts, searchInput, setContacts]);
    


    



    return (
        <div className='searchBar'>
          <input type="text" id="searchBarInfo" placeholder="Search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>  
          <button type="submit" id="searchButton" onClick = {() => SearchForName()}>Search</button>
          {/* <body>onClick = {() => useEffect()}</body> */}
        </div>
    );
};

export default SearchBar;