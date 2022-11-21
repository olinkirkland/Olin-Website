import resumePdf from '../assets/files/olin-kirkland-resume.pdf';

function CallToActionBanner() {
  return (
    <div className="banner banner-call-to-action">
      <a className="btn" href={resumePdf} download="olin-kirkland-resume.pdf">
        <i className="fas fa-file-download"></i>
        <span>My Resume</span>
      </a>
      <a
        className="btn"
        href="https://www.linkedin.com/in/olin-kirkland-10483078/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span>Connect on LinkedIn</span>
      </a>
      <a className="btn" href="mailto:me@olinkirk.land">
        <i className="fas fa-envelope"></i>
        <span>Contact me</span>
      </a>
    </div>
  );
}

export default CallToActionBanner;
