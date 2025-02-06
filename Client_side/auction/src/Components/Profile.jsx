import React, { useState } from 'react';
import axios from 'axios';
import '../styling/Profile.css'

const PatientForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8001/api/patients', {
        name,
        email,
        age,
        phone,
        medicalConditions,
        preferredLanguage,
      });

      setSuccessMessage('Patient added successfully!');
      setName('');
      setEmail('');
      setAge('');
      setPhone('');
      setMedicalConditions('');
      setPreferredLanguage('');
    } catch (err) {
      setError('Failed to add patient');
    }
  };

  return (
    <>
   
    <div className='Profile_container'>
        
      <h2>My Profile</h2>

   

     

      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Medical Conditions (comma-separated):</label>
          <input
            type="text"
            value={medicalConditions}
            onChange={(e) => setMedicalConditions(e.target.value)}
          />
        </div>

        <div>
        
        </div>

        <button type="submit">Add Patient</button>
      </form>
    </div>
    </>
  );
};

export default PatientForm;
