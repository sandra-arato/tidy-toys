import React from 'react';
import styles from './Postcodes.module.css'
const Postcodes = ({openContactForm}) => {
  return (
    <section className={styles.postcodes}>
      <h2>Service areas</h2>
      <p>We currently offer the our service in the following suburbs of Sunshine Coast:</p>
      <ul>
        <li>Forest Glen 4556</li>
        <li>Mons 4556</li>
        <li>Tanawha 4556</li>
        <li>Kunda Park 4556</li>
        <li>Sippy Downs 4556</li>
        <li>Buderim 4556</li>
        <li>Mountain Creek 4557</li>
        <li>Kuluin 4558</li>
        <li>Maroochydore 4558</li>
        <li>Alexandra Headland 4572</li>
        <li>Minyama 4575</li>
        <li>Warana 4575</li>
        <li>Buddina 4575</li>
        <li>Parrearra 4575</li>
        <li>Mooloolaba 4557</li>
      </ul>
      <p>Your postcode didn't make the cut? Register your interest instead, so we can let you know when we launch in your area.</p>
      <button onClick={() => openContactForm()} className={styles.cta}>Join the waitlist</button>
    </section>
  );
};

export default Postcodes;