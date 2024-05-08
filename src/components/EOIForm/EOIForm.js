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
  const handleClose = () => {
    onClose();
  }

  return (
    <div className={styles.modal}>
      <div className={styles.form}>

      <h2>Register your interest</h2>
        <form  target="_blank" action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSe4dvkvkXLOK046495OdXKnmDdVdcvf3tbwEWTjBtJUKipgjA/formResponse" method="POST">
        <button className={styles.closeButton} onClick={handleClose}>Close</button>
      <label>
        Name:
        <input type="text" value={name} name="entry.425802846" onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="text" value={phoneNumber} name="entry.518751739" onChange={handlePhoneNumberChange} />
      </label>
      <br />
      <label>
        Postcode:
        <input type="text" value={postcode} min="1000" max="9999" name="entry.623523051" onChange={handlePostcodeChange} />
      </label>
      <br />
      <label>
        Number of Children:
        <input type="number" value={numberOfChildren} name="entry.789529996" onChange={handleNumberOfChildrenChange} />
      </label>
          <br />
      <div className={styles.ages}>
                {Array.from({ length: numberOfChildren }, (_, index) => (
        <div key={index}>
          <label>
            Child {index + 1} Age:
            <input type="text" value={childrenAges[index] || ''} onChange={(event) => handleChildAgeChange(index, event)} />
          </label>
          <br />
        </div>
      ))}
          </div>

        <input type="hidden" name="fvv" value="1" />
          <input type="hidden" name="entry.1240337038" value={childrenAges.concat(',')} />
          <input type="hidden" name="pageHistory" value="0" />
          <input type="hidden" name="submissionTimestamp" value={Date.now()} />
      <button type="submit" className={styles.submit}>Submit</button>
    </form>
      </div>

    </div>
    
  );
};

export default EOIForm;