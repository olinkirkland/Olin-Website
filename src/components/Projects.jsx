const projects = [
  { name: 'woodland-stories', img: 'woodland-stories.jpg', big: true },
  { name: 'realms', img: 'realms.jpg' },
  { name: 'worlds', img: 'worlds.jpg' },
  { name: 'castle-map', img: 'castle-map.jpg' },
  { name: 'crest', img: 'crest.jpg' },
  { name: 'death-calculator', img: 'death-calculator.jpg' },
  { name: 'energy-career-quiz', img: 'energy-career-quiz.jpg' },
  { name: 'energy-map', img: 'energy-map.jpg' },
  { name: 'fracking-game', img: 'fracking-game.jpg' },
  { name: 'geologic-timeline', img: 'geologic-timeline.jpg' },
  { name: 'geosteering-game', img: 'geosteering-game.jpg' },
  { name: 'hydrocarbon-info-1', img: 'hydrocarbon-info-1.jpg' },
  { name: 'hydrocarbon-info-2', img: 'hydrocarbon-info-2.jpg' },
  { name: 'renewables-1', img: 'renewables-1.jpg' },
  { name: 'hydrocarbon-info-3', img: 'hydrocarbon-info-3.jpg' },
  { name: 'medieval-armor', img: 'medieval-armor.jpg' },
  { name: 'pipeline-kiosk', img: 'pipeline-kiosk.jpg' },
  { name: 'prospector-game', img: 'prospector-game.jpg' },
  { name: 'renewables-2', img: 'renewables-2.jpg' },
  { name: 'renewables-3', img: 'renewables-3.jpg' },
  { name: 'renewables-4', img: 'renewables-4.jpg' },
  { name: 'renewables-5', img: 'renewables-5.jpg' },
  { name: 'renewables-6', img: 'renewables-6.jpg' },
  { name: 'renewables-7', img: 'renewables-7.jpg' },
  { name: 'seismic-kiosks', img: 'seismic-kiosks.jpg' },
  { name: 'tectonics', img: 'tectonics.jpg' },
  { name: 'transportation-game', img: 'transportation-game.jpg' },
  {
    name: 'traps-interactive-projection',
    img: 'traps-interactive-projection.jpg'
  },
  {
    name: 'unconventional-energy-kiosks',
    img: 'unconventional-energy-kiosks.jpg'
  },
  { name: 'altar', img: 'altar.jpg' },
  { name: 'galaxy-heist', img: 'galaxy-heist.jpg' },
  { name: 'game-studio', img: 'game-studio.jpg' },
  { name: 'Omg', img: 'Omg.jpg' }
];

function Projects() {
  return (
    <section id="projects" className="section-projects container">
      <h2 className="text-center">
        My <strong>Projects</strong>
      </h2>
      <p className="text-center">
        My projects range from <strong>museum applications</strong>, to games,
        to typical web fare.
      </p>
      <ul className="project-cards">
        {projects.map((project, index) => (
          <li
            key={index}
            className={
              'hover-tile project-card ' +
              (project.big ? 'project-card--big' : '')
            }
          >
            <img
              src={`${process.env.PUBLIC_URL}/projects/thumbnails/${project.img}`}
              alt={project.name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
