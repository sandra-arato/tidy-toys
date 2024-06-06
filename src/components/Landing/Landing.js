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
import Postcodes from '../Postcodes/Postcodes';
import Products from '../Products/Products';

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
          <Products />
          <HowTo />
          <Postcodes openContactForm={openForm} />
          <Features />
        </main>
      </div>


      <footer className={styles.footer}>
        <section>
          <p className={styles.icons}>
            <span><a href="https://www.facebook.com/profile.php?id=61559276615876"><svg fill="#494848" width="34px" height="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" /></svg></a></span>
            <span>
              <a href="https://instagram.com/tidytoys.co">
              <svg fill="#494848" version="1.1" width="30px" height="30px" viewBox="0 0 169.063 169.063">
              <g>
                <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                  c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                  c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                  c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
                <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                  C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                  c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
                <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                  c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                  C135.661,29.421,132.821,28.251,129.921,28.251z"/>
                  </g>
                </svg>
              </a>
            </span>
          </p>
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