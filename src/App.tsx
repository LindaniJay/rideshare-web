import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PlatformFeatures from './pages/PlatformFeatures';
import HowItWorks from './pages/HowItWorks';
import ForRenters from './pages/ForRenters';
import ForHosts from './pages/ForHosts';
import Safety from './pages/Safety';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import EarningsCalculator from './pages/EarningsCalculator';
import ComingSoon from './pages/ComingSoon';

import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<PlatformFeatures />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/for-renters" element={<ForRenters />} />
          <Route path="/for-hosts" element={<ForHosts />} />
          <Route path="/earnings-calculator" element={<EarningsCalculator />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
