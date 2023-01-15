import resumePdfEn from '../assets/files/olin-kirkland-resume-en.pdf';
import resumePdfDe from '../assets/files/olin-kirkland-resume-de.pdf';
import { currentLanguage, text } from '../locale/locale';
import Social from './Social';

function Hero() {
  const resumePdf = currentLanguage === 'en' ? resumePdfEn : resumePdfDe;

  return (
    <section className="section-hero">
      <div className="header-content">
        <h1>{text('hero.title')}</h1>
        <h2>{text('hero.subtitle')}</h2>
        <p>{text('hero.tagline')}</p>
        <div className="header-links">
          <Social />
          <div className="resume-container">
            <a
              href={resumePdf}
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              <span>{text('hero.btn-my-resume')}</span>
            </a>
            <a
              className="resume-download"
              href={resumePdf}
              download={'olin-kirkland-resume-' + currentLanguage + '.pdf'}
            >
              <i className="fas fa-file-download"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-prompt">
        <a href="#about" className="btn btn--scroll">
          <span>{text('hero.btn-scroll')}</span>
          <i className="fas fa-mouse"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
