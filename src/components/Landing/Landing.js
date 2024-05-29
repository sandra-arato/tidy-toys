import React from 'react';
import logo from '../../hero.jpg';
import styles from './Landing.module.css';
import About from "../About/About";
import Mission from "../Mission/Misson";
import HowTo from "../HowTo/HowTo";
import Features from "../Features/Features";
import Plans from "../Plans/Plans";
import { useState } from "react";
import EOIForm from "../EOIForm/EOIForm";
import { Link } from 'react-router-dom';

function Landing() {
    const [contactFormOpen, setContactFormOpen] = useState(false);
  const openForm = () => {
    if (!contactFormOpen) {
      setContactFormOpen(true);
    }
  }

  const AppStyles = contactFormOpen ?  styles.AppNoScroll : '';
  return (
    <>
      <div className={AppStyles}>
          <header className={styles.appHeader}>
            <div  className={styles.hero}><img src={logo} alt="Child playing on his own with montessori toys" label="https://unsplash.com/@paige_cody" /></div>
            <div>
              <h1>
                <div className={styles.logo}>tidytoys</div>
                <span>The Eco-Friendly Toy Rotation Service for Busy Families</span>      
              </h1>
              <a href="#plans" className={styles.cta}>Get my box!</a>
            </div>
          </header>
        <main>
            <About />
            <Mission />
            <HowTo />
            <Features />  
        </main>
      </div>


      <footer className={styles.footer}>
        
        
        <section>
          <p>© 2024 Tidy Toys. All rights reserved.</p>
          <p><Link to="/terms">Terms and Conditions</Link></p>
          <p><Link to="/privacy">Privacy Policy</Link></p>
        </section>
        <section>
          <Plans />
          <button onClick={openForm} className={styles.cta}>Join our Beta Today!</button>
        </section>

      </footer>
      {contactFormOpen ? (<EOIForm onClose={() => setContactFormOpen(false)} />) : null}
    </>
  );
}

export default Landing;