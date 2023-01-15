import resumePdfEn from '../assets/files/olin-kirkland-resume-en.pdf';
import resumePdfDe from '../assets/files/olin-kirkland-resume-de.pdf';
import { currentLanguage, text } from '../locale/locale';

function CallToActionBanner() {
  const resumePdf = currentLanguage === 'en' ? resumePdfEn : resumePdfDe;

  return (
    <div className="banner banner-call-to-action">
      <a
        className="btn"
        href={resumePdf}
        download={'olin-kirkland-resume-' + currentLanguage + '.pdf'}
      >
        <i className="fas fa-file-download"></i>
        <span>{text('cta-banner.btn-my-resume')}</span>
      </a>
      <a
        className="btn"
        href="https://www.linkedin.com/in/olin-kirkland-10483078/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span>{text('cta-banner.btn-connect-on-linkedin')}</span>
      </a>
      <a className="btn" href="mailto:me@olinkirk.land">
        <i className="fas fa-envelope"></i>
        <span>{text('cta-banner.btn-contact-me')}</span>
      </a>
    </div>
  );
}

export default CallToActionBanner;
