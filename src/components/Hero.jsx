import Pdf from '../assets/files/olin-kirkland-resume.pdf';

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
          <ul className="social-links">
            <li>
              <a href="https://github.com/olinkirkland">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/olin-kirkland-10483078/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/olinkirkland/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/itsOlinKirkland">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="me@olinkirk.land">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
          <div className="resume-container">
            <a href={Pdf} target="_blank" className="btn">
              <span>My Resume</span>
            </a>
            <a
              className="resume-download"
              href={Pdf}
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
