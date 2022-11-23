import './assets/css/styles.css';
import './assets/css/queries.css';
import About from './components/About';
import CallToActionBanner from './components/CallToActionBanner';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

function App() {
  useEffect(() => {
    // Track page view (mixpanel)
    mixpanel.init('804056956bf1195939b17e5f559fad89', {
      api_host: 'https://api.mixpanel.com/',
      debug: true
    });
    setTimeout(() => {
      mixpanel.track('Page View', {
        url: window.location.href,
        referrer: document.referrer
      });
    }, 10000);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <CallToActionBanner />
      <Skills />
      {/* <hr /> */}
      {/* <Projects /> */}
      <Footer />
    </>
  );
}

export default App;
