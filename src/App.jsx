import './assets/css/styles.css';
import './assets/css/queries.css';
import About from './components/About';
import CallToActionBanner from './components/CallToActionBanner';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
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
