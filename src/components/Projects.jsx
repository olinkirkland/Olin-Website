const projects = [
  {
    name: 'realms writer',
    img: 'realms-writer.jpg',
    tags: ['html', 'css', 'typescript', 'procedural generation']
  },
  {
    name: 'woodland stories',
    img: 'woodland-stories.jpg',
    tags: ['html', 'css']
  },
  {
    name: 'realms',
    img: 'realms.jpg',
    tags: ['actionscript', 'flex', 'procedural generation']
  },
  {
    name: 'worlds',
    img: 'worlds.jpg',
    tags: ['actionscript', 'flex', 'procedural generation']
  },
  {
    name: 'world maker',
    img: 'world-maker-1.jpg',
    tags: ['actionscript', 'flex', 'procedural generation']
  },
  {
    name: 'world maker',
    img: 'world-maker-2.jpg',
    tags: ['actionscript', 'flex', 'procedural generation']
  },
  {
    name: 'castle map',
    img: 'castle-map.jpg',
    tags: ['actionscript', 'flex', 'PlayerIO', 'C#']
  },
  { name: 'crest designer', img: 'crest.jpg', tags: ['actionscript'] },
  {
    name: 'death calculator',
    img: 'death-calculator.jpg',
    tags: ['actionscript']
  },
  {
    name: 'energy career-quiz',
    img: 'energy-career-quiz.jpg',
    tags: ['actionscript']
  },
  {
    name: 'energy map',
    img: 'energy-map.jpg',
    tags: ['actionscript', 'flex', 'arcgis']
  },
  { name: 'fracking game', img: 'fracking-game.jpg', tags: ['actionscript'] },
  {
    name: 'geologic timeline',
    img: 'geologic-timeline.jpg',
    tags: ['actionscript']
  },
  {
    name: 'geosteering game',
    img: 'geosteering-game.jpg',
    tags: ['actionscript']
  },
  {
    name: 'hydrocarbon info',
    img: 'hydrocarbon-info-1.jpg',
    tags: ['actionscript']
  },
  {
    name: 'hydrocarbon info',
    img: 'hydrocarbon-info-2.jpg',
    tags: ['actionscript']
  },
  {
    name: 'hydrocarbon info',
    img: 'hydrocarbon-info-3.jpg',
    tags: ['actionscript']
  },
  { name: 'medieval armor', img: 'medieval-armor.jpg', tags: ['actionscript'] },
  { name: 'pipeline kiosk', img: 'pipeline-kiosk.jpg', tags: ['actionscript'] },
  {
    name: 'prospector game',
    img: 'prospector-game.jpg',
    tags: ['actionscript', 'arduino']
  },
  {
    name: 'renewables kiosks',
    img: 'renewables-1.jpg',
    tags: ['actionscript']
  },
  {
    name: 'renewables kiosks',
    img: 'renewables-2.jpg',
    tags: ['actionscript']
  },
  {
    name: 'renewables kiosks',
    img: 'renewables-3.jpg',
    tags: ['actionscript']
  },
  {
    name: 'renewables kiosks',
    img: 'renewables-4.jpg',
    tags: ['actionscript']
  },
  {
    name: 'renewables kiosks',
    img: 'renewables-5.jpg',
    tags: ['actionscript']
  },
  {
    name: 'renewables kiosks',
    img: 'renewables-6.jpg',
    tags: ['actionscript']
  },
  {
    name: 'renewables kiosks',
    img: 'renewables-7.jpg',
    tags: ['actionscript']
  },
  { name: 'seismic kiosks', img: 'seismic-kiosks.jpg', tags: ['actionscript'] },
  { name: 'tectonics app', img: 'tectonics.jpg', tags: ['actionscript'] },
  {
    name: 'transportation game',
    img: 'transportation-game.jpg',
    tags: ['unity', 'c#', 'actionscript']
  },
  {
    name: 'traps-interactive-projection',
    img: 'traps-interactive-projection.jpg',
    tags: ['actionscript']
  },
  {
    name: 'unconventional-energy-kiosks',
    img: 'unconventional-energy-kiosks.jpg',
    tags: ['actionscript']
  },
  { name: 'altar', img: 'altar.jpg', tags: ['PlayerIO', 'C#', 'actionscript'] },
  { name: 'galaxy heist', img: 'galaxy-heist.jpg', tags: ['actionscript'] },
  { name: 'game studio', img: 'game-studio.jpg', tags: ['actionscript'] },
  { name: 'omg', img: 'omg.jpg', tags: ['actionscript', 'flex'] }
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

      <ul className="masonry">
        {projects.map((project, i) => (
          <li key={i} className="project-card">
            <div className="project-card-img-container">
              <img
                src={`${process.env.PUBLIC_URL}/projects/thumbnails/${project.img}`}
                alt={project.name}
              />
            </div>
            <div className="project-card-body">
              <p>{project.name}</p>
              <ul className="tags">
                {project.tags.map((tag, j) => (
                  <li key={j}>{tag}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
