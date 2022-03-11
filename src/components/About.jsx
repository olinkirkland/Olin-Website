import portrait from '../assets/images/portrait.jpg';

function About() {
  return (
    <section id="about" className="section-about-me">
      <div className="container intro">
        <div className="intro-image">
          <img src={portrait} alt="Olin Kirkland" />
        </div>
        <div className="intro-content">
          <h2>
            I bring a<strong> unique perspective</strong> to application design
            through my background in<strong> museums</strong> and<strong> games</strong>.
          </h2>

          <div className="intro-cards">
            <div className="intro-card">
              <i className="fas fa-archway"></i>
              <p>
                I design for intuition. I built touch-screen apps for
                <strong> museum exhibits</strong>, developed front-end solutions
                for security system management, and most recently worked on
                <strong> mobile games</strong> in Cologne.
              </p>
            </div>

            <div className="intro-card">
              <i className="fas fa-code"></i>
              <p>
                Agnostic of platform, I'm dedicated to developing software that
                adheres to best practices and<strong> design patterns</strong>.
                My tech stack includes modern technologies like HTML/CSS,
                JavaScript, and<strong> TypeScript</strong>. In the past, I
                worked extensively in Apache Flex and ActionScript.
              </p>
            </div>

            <div className="intro-card">
              <i className="fas fa-globe-americas"></i>
              <p>
                I am a native<strong> English and German</strong> speaker.
                <br />
                <br />
                Off screen, I like exploring new places, writing about fictional
                worlds, hiking, and playing board games.
              </p>1
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
