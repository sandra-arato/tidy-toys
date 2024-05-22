import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import logo from './hero.jpg';
import styles from './App.module.css';
import About from "./components/About/About";
import Mission from "./components/Mission/Misson";
import HowTo from "./components/HowTo/HowTo";
import Features from "./components/Features/Features";
import Plans from "./components/Plans/Plans";
import { useState } from "react";
import EOIForm from "./components/EOIForm/EOIForm";

function App() {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openForm = () => {
    if (!contactFormOpen) {
      setContactFormOpen(true);
    }
  }

  const AppStyles = contactFormOpen ?  styles.AppNoScroll : '';
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <div className={AppStyles}>
      
      <header className={styles.appHeader}>
          <div  className={styles.hero}><img src={logo} alt="Child playing on his own with montessori toys" label="https://unsplash.com/@paige_cody" /></div>
          <div><h1>
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
      {contactFormOpen ? (<EOIForm onClose={() => setContactFormOpen(false)} />) : null}
      <footer className={styles.footer}>
                  <Plans />
            <button onClick={openForm} className={styles.cta}>Join our Beta Today!</button></footer>


    </div>
  );
    
}

export default App;
