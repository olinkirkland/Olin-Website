import { useEffect } from 'react';
import abtCertificatePdf from '../assets/files/abt-user-essentials.pdf';
import wbsCertificatePdf from '../assets/files/wbs-fullstack-certificate.pdf';
import abt from '../assets/images/abt.png';
import udemy from '../assets/images/udemy.svg';
import wbs from '../assets/images/wbs.png';
import { text } from '../locale/locale';

const skills = [
  text('skills.badges.badge-1'),
  text('skills.badges.badge-2'),
  text('skills.badges.badge-3'),
  text('skills.badges.badge-4'),
  text('skills.badges.badge-5'),
  text('skills.badges.badge-6'),
  text('skills.badges.badge-7'),
  text('skills.badges.badge-8'),
  text('skills.badges.badge-9'),
  text('skills.badges.badge-10'),
  text('skills.badges.badge-11'),
  text('skills.badges.badge-12'),
  text('skills.badges.badge-13'),
  text('skills.badges.badge-14'),
  text('skills.badges.badge-15'),
  text('skills.badges.badge-16'),
  text('skills.badges.badge-17'),
  text('skills.badges.badge-18'),
  text('skills.badges.badge-19')
];

let certificates = [
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
  },
  {
    type: wbs,
    name: 'Full Stack Web & App Development Bootcamp',
    date: {
      month: 4,
      year: 2022
    },
    file: wbsCertificatePdf
  },
  {
    type: abt,
    name: 'AB Tasty User Essentials',
    date: {
      month: 7,
      year: 2022
    },
    file: abtCertificatePdf
  }
];

const months = [
  text('general.months.month-1'),
  text('general.months.month-2'),
  text('general.months.month-3'),
  text('general.months.month-4'),
  text('general.months.month-5'),
  text('general.months.month-6'),
  text('general.months.month-7'),
  text('general.months.month-8'),
  text('general.months.month-9'),
  text('general.months.month-10'),
  text('general.months.month-11'),
  text('general.months.month-12')
];

function Skills() {
  useEffect(() => {
    // Sort certificates by date
    certificates = certificates.sort((a, b) => {
      if (a.date.year < b.date.year) {
        return 1;
      } else if (a.date.year > b.date.year) {
        return -1;
      } else if (a.date.month < b.date.month) {
        return 1;
      }
      return -1;
    });
  }, []);

  return (
    <section id="skills" className="section-skills">
      <div className="container">
        <h2
          className="text-center"
          dangerouslySetInnerHTML={{ __html: text('skills.heading') }}
        ></h2>
        <p
          className="text-center"
          dangerouslySetInnerHTML={{
            __html: text('skills.subheading', new Date().getFullYear() - 2015)
          }}
        ></p>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="badge">
              {skill}
            </li>
          ))}
        </ul>
        <ul className="certificates-list">
          {certificates.map((certificate, index) => (
            <li key={index} className="certificate-card hover-tile" href="">
              <a
                href={certificate.url ? certificate.url : certificate.file}
                target="_blank"
                rel="noreferrer"
              >
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
