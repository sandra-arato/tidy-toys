import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing/Landing";
import Terms from "./components/TermsAndConditions/Terms";
import styles from './App.module.css';
import Privacy from "./components/TermsAndConditions/Privacy";


function App() {

  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
    </div>
  );
    
}

export default App;
