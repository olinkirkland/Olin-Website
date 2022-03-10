import './assets/css/styles.css';
import './assets/css/queries.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Hero />
      <About />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
