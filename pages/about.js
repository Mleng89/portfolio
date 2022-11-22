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
                impact. I wanted to combined by love for education, learning,
                and technology.
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
                reading, or training. (I am an Olympic weightlifting athlete!)
              </p>
              <br />
              <p>
                Currently, I am learning C#, I wanted to learn a more strongly
                typed language!
              </p>
            </div>
          </div>
          <hr className="line_break" />
          <h3>Tech stack:</h3>
          <div className="tech-container">
            <div className="tech-card">
              <ul>
                <u>
                  <h4>Languages</h4>
                </u>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>C#</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="tech-card">
              <ul>
                <u>
                  <h4>Libraries & Frameworks</h4>
                </u>
                <li>Django</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Jest</li>
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>Redux</li>
                <li>React Native</li>
                <li>.NET</li>
              </ul>
            </div>

            <div className="tech-card">
              <ul>
                <u>
                  <h4>Database</h4>
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
                  <h4>Tools</h4>
                </u>
                <li>GitHub</li>
                <li>Postman</li>
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
        .tech-card:active {
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
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
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
        @media only screen and (max-width: 1000px) {
          .container {
            display: flex;
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
    </div>
  );
}
