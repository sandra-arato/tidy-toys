import { Analytics } from "@vercel/analytics/react"
import logo from './hero.jpg';
import styles from './App.module.css';
import About from "./components/About/About";
import Mission from "./components/Mission/Misson";
import HowTo from "./components/HowTo/HowTo";
import Features from "./components/Features/Features";
import Plans from "./components/Plans/Plans";

function App() {
  return (
    <>
      <Analytics />
      <div className="App">
      
      <header className={styles.appHeader}>
        <div  className={styles.hero}><img src={logo} alt="Child playing on his own with montessori toys" label="https://unsplash.com/@paige_cody" /></div>

        <h1><div className={styles.logo}>tidytoys</div><span>The Eco-Friendly Toy Rotation Service for Busy Families</span></h1>
      </header>
      <main>
          <About />
          <Mission />
          <HowTo />
          <Features />
          <Plans />
        <button>Join our Beta Today!</button>
      </main>
      </div>
      </>
  );
    
}

export default App;
