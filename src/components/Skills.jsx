const skills = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
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

function Skills() {
  return (
    <section class="section-skills">
      <div class="container">
        <h2 class="text-center">
          <strong>Skills</strong> and Proficiencies
        </h2>
        <p class="text-center">
          I have over <strong>7 years</strong> of front-end design and
          development experience.
        </p>
        <ul class="skills-list">
          {skills.map((skill) => (
            <li class="badge">{skill}</li>
          ))}
        </ul>
        <div class="udemy-certificates">
          <div class="udemy-certificate hover-tile">
            <a
              href="https://www.udemy.com/certificate/UC-90b286ba-f59a-48c5-90e1-b7c674c70802"
              target="_blank"
            >
              <div class="cert-header">
                <img src="assets/svg-icons/udemy.svg" alt="Udemy logo" />
                <p class="cert-name">
                  Build Responsive Real-World Websites with HTML and CSS
                </p>
              </div>
              <p class="cert-date">January 2022</p>
            </a>
          </div>

          <div class="udemy-certificate hover-tile">
            <a
              href="https://www.udemy.com/certificate/UC-a8aed92b-dba2-4c31-b6ef-62059fe61d3d"
              target="_blank"
            >
              <div class="cert-header">
                <img src="assets/svg-icons/udemy.svg" alt="Udemy logo" />
                <p class="cert-name">
                  Tailwind CSS: A Modern Way to Build Websites Using CSS
                </p>
              </div>
              <p class="cert-date">January 2022</p>
            </a>
          </div>

          <div class="udemy-certificate hover-tile">
            <a
              href="https://www.udemy.com/certificate/UC-c68c1add-dfab-425e-afa5-d141a12b7bcd"
              target="_blank"
            >
              <div class="cert-header">
                <img src="assets/svg-icons/udemy.svg" alt="Udemy logo" />
                <p class="cert-name">Figma - UI/UX Design Essential Training</p>
              </div>
              <p class="cert-date">December 2021</p>
            </a>
          </div>

          <div class="udemy-certificate hover-tile">
            <a
              href="https://www.udemy.com/certificate/UC-313b617c-5726-42e5-98cd-d2022655a752"
              target="_blank"
            >
              <div class="cert-header">
                <img src="assets/svg-icons/udemy.svg" alt="Udemy logo" />
                <p class="cert-name">The Git & Github Bootcamp</p>
              </div>
              <p class="cert-date">November 2021</p>
            </a>
          </div>

          <div class="udemy-certificate hover-tile">
            <a
              href="https://www.udemy.com/certificate/UC-9be73abd-906e-4bd2-bb7b-fbc110813e93"
              target="_blank"
            >
              <div class="cert-header">
                <img src="assets/svg-icons/udemy.svg" alt="Udemy logo" />
                <p class="cert-name">Understanding TypeScript - 2022 Edition</p>
              </div>
              <p class="cert-date">November 2021</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
