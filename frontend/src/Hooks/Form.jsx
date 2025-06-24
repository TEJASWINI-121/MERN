import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        department: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data); // You can show a success message here
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <br /><br />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <br /><br />
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <br /><br />
                <label>Department:</label>
                <select name="department" value={formData.department} onChange={handleChange}>
                    <option value="">Select Department</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="CSE">CSE</option>
                    <option value="AIDS">AIDS</option>
                </select>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;