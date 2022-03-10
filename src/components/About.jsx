import portrait from '../assets/img/portrait.jpg';

function About() {
  return (
    <section id="about" class="section-about-me">
      <div class="container intro">
        <div class="intro-image">
          <img src={portrait} alt="A picture of Olin Kirkland" />
        </div>
        <div class="intro-content">
          <h2>
            I bring a <strong>unique perspective</strong> to application design
            through my background in <strong>museums</strong> and
            <strong>games</strong>.
          </h2>

          <div class="intro-cards">
            <div class="intro-card">
              <i class="fas fa-archway"></i>
              <p>
                I design for intuition. I built touch-screen apps for
                <strong>museum exhibits</strong>, developed front-end solutions
                for security system management, and most recently worked on{' '}
                <strong>mobile games</strong> in Cologne.
              </p>
            </div>

            <div class="intro-card">
              <i class="fas fa-code"></i>
              <p>
                Agnostic of platform, I'm dedicated to developing software that
                adheres to best practices and
                <strong>design patterns</strong>. My tech stack includes modern
                technologies like HTML/CSS, JavaScript, and
                <strong>TypeScript</strong>. In the past, I worked extensively
                in Apache Flex and ActionScript.
              </p>
            </div>

            <div class="intro-card">
              <i class="fas fa-globe-americas"></i>
              <p>
                I am a native
                <strong>English and German</strong> speaker. <br />
                <br />
                Off screen, I like exploring new places, writing about fictional
                worlds, hiking, and playing board games.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
