import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';
import './assets/css/styles.css';
import './assets/css/queries.css';
import About from './components/About';
import CallToActionBanner from './components/CallToActionBanner';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LanguagePicker from './components/LanguagePicker';
import Skills from './components/Skills';

const MIXPANEL_TOKEN = '804056956bf1195939b17e5f559fad89';

function App() {
  useEffect(() => {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: true,
      loaded: () => {
        mixpanel.track('Page View', {
          url: window.location.href,
          referrer: document.referrer
        });
      },
      error: (err) => {
        console.error(err);
      },
      api_host: 'https://api-eu.mixpanel.com'
    });
  }, []);

  return (
    <>
      <LanguagePicker />
      <Hero />
      <About />
      <CallToActionBanner />
      <Skills />
      {/* <Projects /> */}
      <Footer />
    </>
  );
}

export default App;
