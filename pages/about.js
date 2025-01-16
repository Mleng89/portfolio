import Head from 'next/head';
import Layout from './layout';
export default function about() {
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
            <img className="me_image" src="/media_me1.png" />
            <div className="about_context card">
              <h2>Hello!</h2>
              <p>
                My name is Matthew Leng, I was born and raised in Brooklyn, New
                York.
              </p>
              <br />
              <p>
                I was a pre-school teacher for almost a decade, although I
                absolutely loved the profession, I felt I could make a bigger
                impact. I wanted to combine my love for education, learning, and
                technology.
              </p>
              <br />
              <p>
                This is when I rediscovered my passion for software engineering.
                I took various courses on Udemy and Codecademy, but wanted a
                more structured learning environment, which led me to attend
                Fullstack Academy. Since finishing the bootcamp, I am still
                learning and building applications that can solve problems
                people have in their daily lives to make a bigger impact!
              </p>
              <br />
              <p>
                When I am not learning, you can find me playing video games,
                reading, bouldering, or training. (I am an Olympic weightlifting
                athlete!)
              </p>
              <br />
            </div>
          </div>
          <hr className="line_break" />
          <h3>Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Founding Frontend Developer</h3>
                <p>Stealth - Start up</p>
                <p>2024 - 2024</p>
                <p>
                  Designed and implemented a scalable front-end architecture and
                  reusable components, developed an AI feedback prototype
                  improving model accuracy, optimized development efficiency
                  through enhanced version control, and guided teammates while
                  refining UX/UI requirements in collaboration with leadership
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Associate Software Developer</h3>
                <p>Columbia University</p>
                <p>2023 - 2024</p>
                <p>
                  Led development projects, upgraded the Symfony framework for
                  improved performance and reduced technical debt, and mentored
                  an intern to enhance team productivity and ensure timely
                  project delivery.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Pre-School Teacher</h3>
                <p>Brooklyn, New York</p>
                <p>2012 - 2020</p>
                <p>
                  Provided education and care for young children, fostering
                  their growth and development.
                </p>
              </div>
            </div>
          </div>
          <hr className="line_break" />
          <h3>Tech stack:</h3>
          <div className="tech-container">
            <div className="tech-card">
              <ul>
                <u>
                  <p>Languages</p>
                </u>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>C#</li>
                <li>SQL</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="tech-card">
              <ul>
                <u>
                  <p>Libraries & Frameworks</p>
                </u>
                <li>Django</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Jest</li>
                <li>ReactJS</li>
                <li>Vue.js</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>Redux</li>
                <li>React Native</li>
                <li>.NET</li>
                <li>Symfony</li>
              </ul>
            </div>

            <div className="tech-card">
              <ul>
                <u>
                  <p>Database</p>
                </u>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Configuration Management Database (CMDB/ServiceNow)</li>
              </ul>
            </div>
            <div className="tech-card">
              <ul>
                <u>
                  <p>Tools</p>
                </u>
                <li>GitHub</li>
                <li>Postman</li>
                <li>Jira</li>
                <li>ServiceNow</li>
                <li>Microsoft Azure</li>
              </ul>
            </div>
          </div>
        </Layout>
      </main>
      <style jsx>{`
        .container {
          min-height: 80vh;
          min-width: 95vw;
          padding: 0 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        hr {
          border: 0;
          height: 1px;
          width: 10%;
          position: relative;
          margin: 30px auto;
        }
        .line_break {
          background: #232946;
        }

        .tech-container {
          min-height: 25vh;
          min-width: 15vw;
          padding: 0 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
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
          font-family: 'Chivo';
          text-align: center;
        }
        h3 {
          font-size: 3rem;
          text-align: center;
          margin-top: 0;
          margin-bottom: 1%;
        }
        h4 {
          font-size: 1.5rem;
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
        }

        .card {
          margin: 1rem;
          flex-basis: 100%;
          padding: 1.5rem;
          text-align: left;
        }
        .tech-card {
          overflow: auto;
          height: 40vh;
          display: inline-block;
          flex-basis: 15rem;
          margin: 1rem;
          text-align: left;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }
        .tech-card p {
          text-align: left;
        }
        .tech-card ul {
          list-style-type: none;
        }

        .tech-card:hover,
        .tech-card:focus,
        .tech-card:active,
        .timeline-content:hover,
        .timeline-content:focus,
        .timeline-content:active {
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
            0 2px 10px 0 rgba(0, 0, 0, 0.12);
        }

        .card p {
          margin: 0;
          font-size: 1.5rem;
          line-height: 1.5;
          font-family: 'Overpass';
        }

        .logo {
          height: 1em;
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
          background-color: #ff6f61;
          border-radius: 50%;
          border: 2px solid #fff;
        }

        .timeline-content {
          margin-left: 20px;
          background: #f9f9f9;
          padding: 10px 15px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .timeline-content h3 {
          margin-top: 0;
          font-size: 1.2em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          .tech-container {
            display: flex;
            flex-direction: column;
          }
          .tech-card {
            height: 40vh;
            width: 40vw;
          }
          .me_image {
            margin-top: 5vh;
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
