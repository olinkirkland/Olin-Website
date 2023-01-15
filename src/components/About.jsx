import portrait from '../assets/images/portrait.jpg';
import { text } from '../locale/locale';

function About() {
  return (
    <section id="about" className="section-about-me">
      <div className="container intro">
        <div className="intro-content">
          <h2 dangerouslySetInnerHTML={{ __html: text('about.heading') }}></h2>
          <div className="intro-cards">
            <div className="intro-card">
              <i className="fas fa-object-group"></i>
              <p
                dangerouslySetInnerHTML={{ __html: text('about.cards.card-1') }}
              ></p>
            </div>

            <div className="intro-card">
              <i className="fas fa-code"></i>
              <p
                dangerouslySetInnerHTML={{ __html: text('about.cards.card-2') }}
              ></p>
            </div>

            <div className="intro-card">
              <i className="fas fa-globe-americas"></i>
              <p
                dangerouslySetInnerHTML={{ __html: text('about.cards.card-3') }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
