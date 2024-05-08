import React, { useState } from 'react';

import styles from './EOIForm.module.css';

const EOIForm = ({onClose}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [postcode, setPostcode] = useState('');
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [childrenAges, setChildrenAges] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePostcodeChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleNumberOfChildrenChange = (event) => {
    setNumberOfChildren(event.target.value);
  };

  const handleChildAgeChange = (index, event) => {
    const updatedChildrenAges = [...childrenAges];
    updatedChildrenAges[index] = event.target.value;
    setChildrenAges(updatedChildrenAges);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const handleClose = () => {
    onClose();
  }

  return (
    <div className={styles.modal}>
      <div>
                <button className={styles.closeButton} onClick={handleClose}>Close</button>
      <h2>Register your interest</h2>
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
      </label>
      <br />
      <label>
        Postcode:
        <input type="text" value={postcode} min="1000" max="9999" onChange={handlePostcodeChange} />
      </label>
      <br />
      <label>
        Number of Children:
        <input type="number" value={numberOfChildren} onChange={handleNumberOfChildrenChange} />
      </label>
      <br />
      {Array.from({ length: numberOfChildren }, (_, index) => (
        <div key={index}>
          <label>
            Child {index + 1} Age:
            <input type="text" value={childrenAges[index] || ''} onChange={(event) => handleChildAgeChange(index, event)} />
          </label>
          <br />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
      </div>

    </div>
    
  );
};

export default EOIForm;