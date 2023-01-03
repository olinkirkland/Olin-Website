import Social from './Social';

function Footer() {
  return (
    <footer>
      <Social />
      <p>&copy; {new Date().getFullYear()} Olin Kirkland</p>
    </footer>
  );
}

export default Footer;
