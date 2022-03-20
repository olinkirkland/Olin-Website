import { useEffect, useState } from 'react';

const allProjects = [
  {
    name: 'meme factory',
    img: 'meme-factory.jpg',
    tags: ['html', 'css', 'javascript', 'react']
  },
  {
    name: 'ip finder',
    img: 'ip-finder.jpg',
    tags: ['html', 'css', 'javascript', 'react']
  },
  {
    name: 'portfolio',
    img: 'portfolio.jpg',
    tags: ['html', 'css', 'javascript', 'react']
  },
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
    tags: ['actionscript', 'apache flex', 'procedural generation']
  },
  {
    name: 'worlds',
    img: 'worlds.jpg',
    tags: ['actionscript', 'apache flex', 'procedural generation']
  },
  {
    name: 'world maker',
    img: 'world-maker-2.jpg',
    tags: ['actionscript', 'apache flex', 'procedural generation']
  },
  {
    name: 'castle map',
    img: 'castle-map.jpg',
    tags: ['actionscript', 'playerio', 'c#']
  },
  { name: 'crest designer', img: 'crest.jpg', tags: ['actionscript'] },
  {
    name: 'death calculator',
    img: 'death-calculator.jpg',
    tags: ['actionscript']
  },
  {
    name: 'energy career quiz',
    img: 'energy-career-quiz.jpg',
    tags: ['actionscript']
  },
  {
    name: 'energy map',
    img: 'energy-map.jpg',
    tags: ['actionscript', 'apache flex', 'arcgis']
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
  { name: 'altar', img: 'altar.jpg', tags: ['playerio', 'c#', 'actionscript'] },
  { name: 'galaxy heist', img: 'galaxy-heist.jpg', tags: ['actionscript'] },
  { name: 'game studio', img: 'game-studio.jpg', tags: ['actionscript'] },
  { name: 'omg', img: 'omg.jpg', tags: ['actionscript', 'apache flex'] }
];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');

  useEffect(() => {
    // Set initial filters
    let filterCounts = allProjects.reduce((accumulator, p) => {
      p.tags.forEach((t) => {
        if (!accumulator.hasOwnProperty(t)) accumulator[t] = 0;
        accumulator[t]++;
      });
      return accumulator;
    }, {});

    // Only allow the user to filter by tags that appear at least twice
    let arr = [];
    Object.keys(filterCounts).forEach((key) => {
      if (filterCounts[key] > 1) arr.push(key);
    });

    arr.unshift('all');
    setFilters(arr);
  }, []);

  function onClickFilter({ target }) {
    const f = target.innerHTML != currentFilter ? target.innerHTML : 'all';
    setCurrentFilter(f);
  }

  useEffect(() => {
    // Select the filter
    document
      .querySelectorAll(`.filter-list > li`)
      .forEach((el) => el.classList.remove('filter-active'));

    const filterEl = document.querySelector(
      `.filter-list > li[data="${currentFilter}"]`
    );
    if (filterEl) filterEl.classList.add('filter-active');
  }, [projects]);

  useEffect(() => {
    // Filter the project list
    setProjects(
      allProjects.filter(
        (p) => currentFilter === 'all' || p.tags.includes(currentFilter)
      )
    );
  }, [currentFilter]);

  return (
    <section id="projects" className="section-projects container">
      <h2 className="text-center">
        My <strong>Projects</strong>
      </h2>
      <p className="text-center">
        My projects range from <strong>museum applications</strong>, to games,
        to websites and apps.
      </p>

      <div className="filter-list">
        {filters.map((f, i) => (
          <li key={i} onClick={onClickFilter} data={f}>
            {f}
          </li>
        ))}
      </div>
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
