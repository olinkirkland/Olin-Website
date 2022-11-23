import './assets/css/styles.css';
import './assets/css/queries.css';
import About from './components/About';
import CallToActionBanner from './components/CallToActionBanner';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = '804056956bf1195939b17e5f559fad89';

function App() {
  useEffect(() => {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: true,
      loaded: (m) => {
        console.log('Mixpanel loaded');
        console.log(m);
        m.track('test');
      },
      error: (err) => {
        console.log('Mixpanel error', err);
      }
    });

    // Track page view (mixpanel)
    // mixpanel.init('804056956bf1195939b17e5f559fad89', {
    //   api_host: 'https://api-eu.mixpanel.com/track',
    //   debug: true,
    //   loaded: function (mixpanel) {
    //     console.log('Mixpanel loaded');
    //     mixpanel.track('Page View', {
    //       url: window.location.href,
    //       referrer: document.referrer
    //     });
    //   }
    // });
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
