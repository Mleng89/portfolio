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
                absolutely loved the profession, I felt something was missing in
                my career and life. Since I had received my Masters in Early
                Childhood Education, I knew what was missing, it was the craving
                for a continuous education, I had a passion to constantly learn.
              </p>
              <br />
              <p>
                This is when I rediscovered my passion for technology, through
                taking courses on Udemy and Codecademy I was able to apply for a
                coding bootcamp, Fullstack Academy. Since finishing the
                bootcamp, I am constantly learning and building applications
                that can solve problems people have in their daily lives.
              </p>
              <br />
              <p>
                When I am not learning, you can find me playing video games,
                reading, or training. (I am an Olympic weightlifting athlete!)
              </p>
              <br />
              <p>
                Currently, I am dipping my feet in React frameworks such as
                Gatsby & Next.js. I am learning Typescript, Electron, Firebase,
                and Python with Django & FastAPI as well!
              </p>
            </div>
          </div>
          <hr className="line_break" />
          <h3>Tech stack:</h3>
          <div className="tech-container">
            <div className="tech-card">
              <ul>
                <u>
                  <h4>Web</h4>
                </u>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>REST API</li>
                <li>Material-UI</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="tech-card">
              <ul>
                <u>
                  <h4>Javascript</h4>
                </u>
                <li>Typescript</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>Next</li>
                <li>Phaser</li>
                <li>Electron</li>
                <li>Redux</li>
                <li>Express</li>
                <li>Node</li>
              </ul>
            </div>
            <div className="tech-card">
              <ul>
                <u>
                  <h4>Python</h4>
                </u>
                <li>Python</li>
                <li>Django</li>
                <li>FastAPI</li>
              </ul>
            </div>
            <div className="tech-card">
              <ul>
                <u>
                  <h4>Database</h4>
                </u>
                <li>Sequelize</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
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
          text-align: left;
          text-decoration: none;
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
          color: #0070f3;
          border-color: #0070f3;
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
          background: #b8c1ec;
        }
        * {
          box-sizing: border-box;
          color: #121629;
        }
        @media only screen and (max-width: 768px) {
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
