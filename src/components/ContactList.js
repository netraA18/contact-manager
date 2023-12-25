import React from 'react';
/*functional component to render list of contacts and uses map
to iterate through contacts and render each one
utilizes props to pass data from parent component */

function ContactList({contacts}) {
    return (
        <div className="ui list">
            <h1>Contact List: </h1>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {contact.name} |
                        <strong>  Email:</strong> {contact.email} | 
                        <strong>  Phone:</strong> {contact.phone}
                        <button className="ui button" id = "deleteButton" type="submit"> Delete Contact</button>
                    </li>
                    
                ))}
                 
            </ul>
        </div>
    );
    // const eachName = contacts.map((contact) => contact.name);
    

    // return (
    //     <div className ="ui list">
    //         <h1>Names: </h1>
    //         <ul>
    //             <contacts.map(contact, index) => (
    //                 <li key = {index}>
    //                     <strong>Name:</strong> {contacts.name},

    //                 </li>
    //                 )
    //             {/* {eachName.map((name, index) => (
    //                 <li key={index}>{name}</li>
    //             ))} */}
    //         </ul>
            
    //     </div>

    // );


};

export default ContactList;



