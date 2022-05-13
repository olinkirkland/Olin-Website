import resumePdf from '../assets/files/olin-kirkland-resume.pdf';
import Social from './Social';

function Hero() {
  return (
    <section className="section-hero">
      <div className="header-content">
        <h1>Hi, I'm Olin.</h1>
        <h2>
          I'm a German-American web developer living and working in Cologne,
          Germany.
        </h2>
        <p>I write front-end code and make games.</p>
        <div className="header-links">
          <Social />
          <div className="resume-container">
            <a href={resumePdf} target="_blank" className="btn" rel="noreferrer">
              <span>My Resume</span>
            </a>
            <a
              className="resume-download"
              href={resumePdf}
              download="olin-kirkland-resume.pdf"
            >
              <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-prompt">
        <a href="#about" className="btn btn--scroll">
          <span>Scroll</span>
          <i className="fas fa-arrow-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
