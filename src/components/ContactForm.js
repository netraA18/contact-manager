import React, {useState} from 'react';




function ContactForm({addContact}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    function handleChange(e) {
        //takes name and value property from input field
        const { name, value } = e.target;
        //... is a spread operator
        setFormData({ ...formData, [name]: value, });
    }

    function handleSubmit(e) {
        e.preventDefault();

        addContact(formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
        });
    }
    return (
        <div className = "form-container">
            <h1>Contact Form: </h1>
            <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                    required />
            </div>
            <div className="field">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required />
            </div>
            <div className="field">
                <label>Phone</label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required />
            </div>
            <button className="ui button" type="submit">
                Add Contact
            </button>
        </form>

     </div>
        
    );
}
    

export default ContactForm;