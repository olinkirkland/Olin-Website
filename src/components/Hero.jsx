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
        <p>I write full-stack code for web-apps and games.</p>
        <div className="header-links">
          <Social />
          <div className="resume-container">
            <a
              href={resumePdf}
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              <span>My Resume</span>
            </a>
            <a
              className="resume-download"
              href={resumePdf}
              download="olin-kirkland-resume.pdf"
            >
              <i className="fas fa-file-download"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-prompt">
        <a href="#about" className="btn btn--scroll">
          <span>Scroll down</span>
          <i className="fas fa-mouse"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
