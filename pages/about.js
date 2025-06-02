import Head from 'next/head';
import Layout from './layout';

export default function About() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout title="About | Matthew Leng">
          <link
            href="https://fonts.googleapis.com/css2?family=Chivo&family=Overpass&display=swap"
            rel="stylesheet"
          />

          <div className="container">
            <img className="me_image" src="/media_me1.png" alt="Matthew Leng" />

            <div className="about_context card">
              <h2>Hello!</h2>
              <p>
                My name is Matthew Leng, born and raised in Brooklyn, New York.
              </p>
              <p>
                I was a pre-school teacher for almost a decade. Although I
                absolutely loved the profession, I felt I could make a bigger
                impact by combining my love for education, learning, and
                technology.
              </p>
              <p>
                That’s when I rediscovered my passion for software engineering.
                After taking various online courses, I joined Fullstack Academy
                to pursue structured learning. Since then, I've been building
                applications to solve real-world problems and make a positive
                impact.
              </p>
              <p>
                When I’m not learning or coding, you can find me playing video
                games, reading, bouldering, or training — I’m an Olympic
                weightlifting athlete!
              </p>
            </div>
          </div>

          <hr className="line_break" />

          <h3>Experience</h3>
          <div className="timeline">
            {[
              {
                title: 'Frontend Developer & Technical Writer',
                company: 'Freelance',
                years: '2025 - Present',
                description:
                  'Helping clients build applications to solve real-world problems.'
              },
              {
                title: 'Founding Frontend Developer',
                company: 'Stealth Startup',
                years: '2024 - 2025',
                description:
                  'Designed and implemented scalable front-end architecture, developed an AI feedback prototype improving model accuracy, and collaborated with leadership to refine UX/UI.'
              },
              {
                title: 'Associate Software Developer',
                company: 'Columbia University',
                years: '2023 – 2024',
                description:
                  'Led development projects, upgraded legacy frameworks, and mentored an intern to enhance productivity and ensure timely delivery.'
              },
              {
                title: 'ServiceNow Developer',
                company: 'Sema4',
                years: '2021 – 2022',
                description:
                  'Streamlined workflows and enhanced cross-departmental efficiency through automation.'
              },
              {
                title: 'Pre-School Teacher',
                company: 'New York',
                years: '2012 – 2020',
                description:
                  'Provided early childhood education and fostered a nurturing environment to support children’s growth and development.'
              }
            ].map((item, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{item.title}</h3>
                    <span>{item.years}</span>
                  </div>
                  <h4 className="timeline-company">{item.company}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="line_break" />

          <h3>Tech Stack</h3>

          <div className="tech-container">
            <div className="tech-container">
              {/* Languages */}
              <div className="tech-card">
                <h4>Languages</h4>
                <ul>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg"
                      alt="JavaScript"
                      className="tech-icon"
                    />
                    JavaScript
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg"
                      alt="TypeScript"
                      className="tech-icon"
                    />
                    TypeScript
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg"
                      alt="Python"
                      className="tech-icon"
                    />
                    Python
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/csharp.svg"
                      alt="C#"
                      className="tech-icon"
                    />
                    C#
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg"
                      alt="SQL"
                      className="tech-icon"
                    />
                    SQL
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/php.svg"
                      alt="PHP"
                      className="tech-icon"
                    />
                    PHP
                  </li>
                </ul>
              </div>

              {/* Libraries & Frameworks */}
              <div className="tech-card">
                <h4>Libraries & Frameworks</h4>
                <ul>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/django.svg"
                      alt="Django"
                      className="tech-icon"
                    />
                    Django
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg"
                      alt="Node.js"
                      className="tech-icon"
                    />
                    Node.js
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg"
                      alt="Express"
                      className="tech-icon"
                    />
                    Express
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jest.svg"
                      alt="Jest"
                      className="tech-icon"
                    />
                    Jest
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg"
                      alt="React"
                      className="tech-icon"
                    />
                    React
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vuedotjs.svg"
                      alt="Vue.js"
                      className="tech-icon"
                    />
                    Vue.js
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gatsby.svg"
                      alt="Gatsby"
                      className="tech-icon"
                    />
                    Gatsby
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg"
                      alt="Next.js"
                      className="tech-icon"
                    />
                    Next.js
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redux.svg"
                      alt="Redux"
                      className="tech-icon"
                    />
                    Redux
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg"
                      alt="React Native"
                      className="tech-icon"
                    />
                    React Native
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dotnet.svg"
                      alt=".NET"
                      className="tech-icon"
                    />
                    .NET
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/symfony.svg"
                      alt="Symfony"
                      className="tech-icon"
                    />
                    Symfony
                  </li>
                </ul>
              </div>

              {/* Databases */}
              <div className="tech-card">
                <h4>Databases</h4>
                <ul>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg"
                      alt="PostgreSQL"
                      className="tech-icon"
                    />
                    PostgreSQL
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg"
                      alt="MySQL"
                      className="tech-icon"
                    />
                    MySQL
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg"
                      alt="MongoDB"
                      className="tech-icon"
                    />
                    MongoDB
                  </li>
                  <li>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg"
                      alt="ServiceNow CMDB"
                      className="tech-icon"
                    />
                    ServiceNow CMDB
                  </li>
                </ul>
              </div>

              {/* Tools */}
              <div className="tech-card">
                <h4>Tools</h4>
                <ul>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
                      alt="GitHub"
                      className="tech-icon"
                    />
                    GitHub
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postman.svg"
                      alt="Postman"
                      className="tech-icon"
                    />
                    Postman
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jirasoftware.svg"
                      alt="Jira"
                      className="tech-icon"
                    />
                    Jira
                  </li>
                  <li>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg"
                      alt="ServiceNow"
                      className="tech-icon"
                    />
                    ServiceNow
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftazure.svg"
                      alt="Azure"
                      className="tech-icon"
                    />
                    Microsoft Azure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Layout>
      </main>

      <style jsx>{`
        .container {
          min-height: 80vh;
          width: 100%;
          padding: 0 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .line_break {
          height: 1px;
          background: #232946;
          margin: 30px auto;
          width: 10%;
          border: none;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Chivo', sans-serif;
        }

        h2 {
          font-size: 2em;
          text-align: center;
        }

        h3 {
          font-size: 2rem;
          text-align: center;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        h4 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .me_image {
          margin: 1rem;
          padding: 0.5rem;
          height: 55vh;
          width: auto;
          border-radius: 50%;
        }

        .about_context {
          margin: 2%;
          padding: 2%;
          max-width: 600px;
        }

        .card p {
          margin-bottom: 1rem;
          font-size: 1.2rem;
          line-height: 1.6;
          font-family: 'Overpass', sans-serif;
        }

        .timeline {
          position: relative;
          margin: 20px 0;
          padding-left: 40px;
          border-left: 2px solid #ddd;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 20px;
        }

        .timeline-dot {
          position: absolute;
          left: -12px;
          top: 5px;
          width: 20px;
          height: 20px;
          background-color: #0070f3;
          border-radius: 50%;
          border: 2px solid #fff;
        }

        .timeline-content {
          margin-left: 20px;
          background: #f9f9f9;
          padding: 1rem;
          border-radius: 5px;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .timeline-header h3 {
          margin: 0;
          font-size: 1.1em;
        }

        .timeline-header span {
          font-size: 0.95em;
          color: #666;
        }

        .timeline-company {
          margin: 4px 0;
          font-weight: normal;
          font-size: 1em;
          color: #333;
        }
        .tech-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          padding: 2rem 0;
        }

        .tech-card {
          background: #fff;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          padding: 1.5rem;
          width: 280px;
          min-height: 350px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.3s ease;
        }

        .tech-card:hover {
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        }

        .tech-card h4 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 0.5rem;
        }

        .tech-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .tech-card li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          line-height: 1.6;
          font-size: 1rem;
        }

        .tech-icon {
          height: 22px;
          width: 22px;
          object-fit: contain;
          transition: transform 0.2s;
        }

        .tech-icon:hover {
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            padding: 1rem;
          }

          .me_image {
            height: auto;
            width: 75%;
            margin-top: 5vh;
          }

          .timeline-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }

          .timeline-content {
            padding: 0.75rem;
            font-size: 0.95rem;
          }

          h2 {
            font-size: 1.5em;
          }

          h3 {
            font-size: 1.25rem;
          }

          h4 {
            font-size: 1.1rem;
          }

          .card p {
            font-size: 1rem;
            line-height: 1.4;
          }

          .timeline-company {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: white;
        }

        * {
          box-sizing: border-box;
          color: #121629;
        }
      `}</style>
    </div>
  );
}
