import portrait from '../assets/images/portrait.jpg';

function About() {
  return (
    <section id="about" className="section-about-me">
      <div className="container intro">
        <div className="intro-content">
          <h2>
            I bring a<strong> unique perspective</strong> to application design
            through my background in<strong> museums</strong> and
            <strong> games</strong>.
          </h2>

          <div className="intro-cards">
            <div className="intro-card">
              <i className="fas fa-object-group"></i>
              <p>
                I specialize in creating intuitive user experiences. I have
                experience with mobile, web and desktop development, having
                worked on projects ranging from museum exhibitions to security
                system management and mobile games .
              </p>
            </div>

            <div className="intro-card">
              <i className="fas fa-code"></i>
              <p>
                My tech stack includes HTML/CSS, JavaScript, TypeScript and
                Apache Flex/ActionScript. I'm also familiar with React, Node.js,
                and MongoDB.
                <br />
                <br />I am a native English and German speaker.
              </p>
            </div>

            <div className="intro-card">
              <i className="fas fa-globe-americas"></i>
              <p>
                In my free time, I like going running, exploring new places and
                trying new foods, listening to podcasts, and playing board
                games.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
