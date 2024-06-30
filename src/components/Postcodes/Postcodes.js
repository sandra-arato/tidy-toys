import React from 'react';
import styles from './Postcodes.module.css'
const Postcodes = ({openContactForm}) => {
  return (
    <section className={styles.postcodes}>
      <h2>Service areas</h2>
      <p>We currently offer the our service in the following postcodes of Sunshine Coast:</p>
      <ul>
        <li>Bli Bli 4560</li>
        <li>4551</li>
        <li>4556</li>
        <li>4557</li>
        <li>4558</li>
        <li>4559</li>
        <li>4560</li>
        <li>4561</li>
        <li>4564</li>
        <li>4572</li>
        <li>4573</li>
        <li>4575</li>
      </ul>
      <p>Your postcode didn't make the cut? Register your interest instead, so we can let you know when we launch in your area.</p>
      <button onClick={() => openContactForm()} className={styles.cta}>Join the waitlist</button>
    </section>
  );
};

export default Postcodes;