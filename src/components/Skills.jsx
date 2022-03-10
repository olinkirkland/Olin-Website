import udemy from '../assets/img/udemy.svg';
// import codecademy from '../assets/img/codecademy.svg';

const skills = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'Bootstrap',
  'Tailwind',
  'XML',
  'Git',
  'Figma',
  'English',
  'German',
  'Haxe',
  'ActionScript',
  'Apache Flex',
  'Adobe Animate'
];

const certificates = [
  {
    type: udemy,
    name: 'Build Responsive Real-World Websites with HTML and CSS',
    date: {
      month: 0,
      year: 2022
    },
    url: 'https://www.udemy.com/certificate/UC-90b286ba-f59a-48c5-90e1-b7c674c70802/'
  },
  {
    type: udemy,
    name: 'Tailwind CSS: A Modern Way to Build Websites Using CSS',
    date: {
      month: 0,
      year: 2022
    },
    url: 'https://www.udemy.com/certificate/UC-a8aed92b-dba2-4c31-b6ef-62059fe61d3d/'
  },
  {
    type: udemy,
    name: 'Figma - UI/UX Design Essential Training',
    date: {
      month: 11,
      year: 2021
    },
    url: 'https://www.udemy.com/certificate/UC-c68c1add-dfab-425e-afa5-d141a12b7bcd/'
  },
  {
    type: udemy,
    name: 'The Git & Github Bootcamp',
    date: {
      month: 10,
      year: 2021
    },
    url: 'https://www.udemy.com/certificate/UC-313b617c-5726-42e5-98cd-d2022655a752/'
  },
  {
    type: udemy,
    name: 'Understanding TypeScript - 2022 Edition',
    date: {
      month: 10,
      year: 2021
    },
    url: 'https://www.udemy.com/certificate/UC-9be73abd-906e-4bd2-bb7b-fbc110813e93/'
  },
  {
    type: udemy,
    name: 'The Bootstrap 4 Bootcamp',
    date: {
      month: 2,
      year: 2022
    },
    url: 'https://www.udemy.com/certificate/UC-333d8dd1-c9d9-4a23-a6a6-7b8e17daff08/'
  }
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function Skills() {
  return (
    <section class="section-skills">
      <div class="container">
        <h2 class="text-center">
          <strong>Skills</strong> and Proficiencies
        </h2>
        <p class="text-center">
          I have over<strong> 7 years</strong> of front-end design and
          development experience.
        </p>
        <ul class="skills-list">
          {skills.map((skill) => (
            <li class="badge">{skill}</li>
          ))}
        </ul>
        <ul class="certificates-list">
          {certificates.map((certificate) => (
            <li class="certificate-card hover-tile" href="">
              <a href={certificate.url} target="_blank">
                <div className="certificate-header">
                  <img src={certificate.type} alt="Udemy logo" />
                  <p className="certificate-name">{certificate.name}</p>
                </div>
                <p className="certificate-date">
                  {`${months[certificate.date.month]} ${certificate.date.year}`}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
