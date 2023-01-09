import Social from './Social';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <Social />
        <p>&copy; {new Date().getFullYear()} Olin Kirkland</p>
      </div>
    </footer>
  );
}

export default Footer;
