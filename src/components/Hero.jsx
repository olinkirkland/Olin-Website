import Pdf from '../assets/files/olin-kirkland-resume.pdf';

function Hero() {
  return (
    <section class="section-hero">
      <div class="header-content">
        <h1>Hi, I'm Olin.</h1>
        <h2>
          I'm a German-American web developer living and working in Cologne,
          Germany.
        </h2>
        <p>I write front-end code and make games.</p>
        <div class="header-links">
          <ul class="social-links">
            <li>
              <a href="https://github.com/olinkirkland">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/olin-kirkland-10483078/">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/olinkirkland/">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/itsOlinKirkland">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="me@olinkirk.land">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
          <div class="resume-container">
            <a href={Pdf} target="_blank" class="btn">
              <span>My Resume</span>
            </a>
            <a
              class="resume-download"
              href={Pdf}
              download="olin-kirkland-resume.pdf"
            >
              <i class="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="scroll-prompt">
        <a href="#about" class="btn btn--scroll">
          <span>Scroll</span>
          <i class="fas fa-arrow-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
