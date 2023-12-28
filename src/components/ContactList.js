import React, { useState } from 'react';
import SearchBar from './SearchBar';

//2 props are passed in: contactss is an array and setContacts is a function
function ContactList({contactss, setContacts}) {
    
    //RemoveButtonInfo is a function that takes in index as a parameter (array syntax)
    const RemoveButtonInfo = (index) => {
        //creates a new array called updatedContacts that is a shallow copy of the contactss
        const updatedContacts = [...contactss];
        updatedContacts.splice(index, 1);
        setContacts(updatedContacts);
    };
    /*editInputs is an array; current state is an empty array so edit Inputs 
    that stores the edited names for each contact*/
    const[editInputs, setEditInputs] = useState([]);
    

    
    const EditButtonInfo = (index, StringOne) => {
        //new array stores the contacts with edited names
        const updatedContactsEdit = contactss.map((contact, currentIndex) => {

            var commaIndex = StringOne.indexOf(",");  
            var firstHalf = StringOne.substring(0, commaIndex);
            var i = commaIndex + 1;
            while (StringOne.charAt(i) !== ',') {
                i++;
            }
            var secondHalf = StringOne.substring(commaIndex + 1, i); 
            var thirdHalf = StringOne.substring(i + 1);
                
            const checkIfNone = "none";
            if (firstHalf.trim() === checkIfNone) {
                firstHalf = contact.name;
                
            }

            if (secondHalf.trim() === checkIfNone) {
                secondHalf = contact.email;
            }

            if (thirdHalf.trim() === checkIfNone) {
                thirdHalf = contact.phone;
            }

            
            //check that to make sure not every contact like is being changed
            if (index === currentIndex) {
                //shallow copy the properties of the existing contact (immutable) and change the name
                // console.log("inside text box is: " + editInputs[index] + " and the index is " + index);
                
                return {...contact, name: firstHalf, email: secondHalf, phone: thirdHalf};
            }
            //return unchanged contact if nothing is changed
            return contact;

        });
        //update the state with the new array containing the edited names
        setContacts(updatedContactsEdit);


    };
    return (
        <div className="ui list">
            <SearchBar id="searchBar" contacts={contactss} setContacts={setContacts}/>
            <h1 id="contactList">Contact List: </h1>
            <ul>
                {contactss.map((contact, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {contact.name} |
                        <strong>  Email:</strong> {contact.email} | 
                        <strong>  Phone:</strong> {contact.phone}
                        <button className="ui button" onClick={() => RemoveButtonInfo(index)} id = "deleteButton" type="submit"> Delete Contact</button>
                        <button className="ui button" onClick={() => EditButtonInfo(index, editInputs[index])} id = "editButton" type="submit"> Edit</button>
                        <input type="text"
                         id="editInfo" 
                         placeholder='Edit Info...' 
                         value={editInputs[index]} 
                         onChange={(e) => {
                            const newEditInputs = [...editInputs]; //shallw copy of editInputs array
                            newEditInputs[index] = e.target.value; /*at that index in the new array, the new name that is put in the 
                            input field is going to be stored at that index*/

                            
                            setEditInputs(newEditInputs);
                         }
                         
                        }/>
                        
                    </li>
                    
                    
                ))}
                 
            </ul>
            
        </div>
    );
    


};

export default ContactList;



