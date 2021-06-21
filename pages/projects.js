import Head from 'next/head';
import Link from 'next/link';
import Layout from './layout';
export default function projects() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout title="Projects | Matthew Leng">
          <link
            href="https://fonts.googleapis.com/css2?family=Chivo&family=Overpass&display=swap"
            rel="stylesheet"
          />
          <div className="container">
            <h1>Selected Projects:</h1>
            <div className="project_container">
              <div className="card">
                <h3>Notables</h3>
                <p>
                  A WYSIWYG where users can take notes in plain text AND create
                  code snippets within their document!
                </p>
                <h4>
                  <br />
                  <b>
                    <p>
                      <u>Built on</u>: HTML, CSS, JS, React, Redux, Express,
                      Docker
                    </p>
                  </b>
                  <br />
                </h4>
                <a
                  href="https://github.com/2011-libra/notables"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="image_pointer" src="/notables.png" />
                </a>
                <br />
                <h4>
                  <hr />

                  <Link href="https://youtu.be/cvxI8c0_3U4">
                    <a>Click here for the presentation & demo!</a>
                  </Link>
                </h4>
                {/* | {''}
                <Link href="http://3.128.61.184:8080/">
                  <a>Deployed Site</a>
                </Link> */}
              </div>
              <div className="card">
                <h3>The Cellar</h3>
                <p>E-commerce website for the purcahse of wine!</p>

                <h4>
                  <br />
                  <b>
                    <p>
                      <u>Built on</u>: React, Redux, Express, PostgreSQL
                    </p>
                  </b>
                  <br />
                </h4>
                <a
                  href="https://thecellar.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/thecellar.png" className="image_pointer" />
                </a>
                <br />
                <h3></h3>
              </div>
              <div className="card">
                <h3>Into the Abyss</h3>
                <p>A dungeon crawling card game.</p>

                {/* <p>
                  Users are presented a grid of 3 x 3, where there are other
                  cards that are either monsters, armor, healing items, or a
                  chest. The player is given a default character card that can
                  be dragged using their mouse to make a move.
                </p> */}
                <h4>
                  <br />
                  <b>
                    <u>Built on</u>: HTML and Javascript(Phaser.js).
                  </b>
                </h4>
                <a
                  href="https://mleng89.github.io/Stackathon/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/IntoTheAbyss.png" className="image_pointer" />
                </a>
                <br />
              </div>
            </div>
          </div>
          <h2>In the works:</h2>
          <div className="project_container">
            {/* Edubase */}
            <div className="card">
              <h3>EduBase</h3>
              <p>
                A platform for all teachers to upload and share lesson plans.
                Will have the ability to also leave comments & feedback.
              </p>
              <br />
              <u>
                <p>Features (Work in progress):</p>
              </u>
              <br />
              <p>
                • Calendar unique to each user that will allow for, "todos" and
                better help with organization.
              </p>
              <h4>
                <br />
                <b>
                  <p>
                    <u>Built on</u>: React & Firebase
                  </p>
                </b>
                <br />
              </h4>
              <h3>
                <Link href="https://github.com/Mleng89/edubase">
                  <a>GitHub</a>
                </Link>{' '}
                | {''}
                <Link href="https://github.com/Mleng89/edubase">
                  <a>Deployed</a>
                </Link>
              </h3>
            </div>
            {/* Jobmates */}
            <div className="card">
              <h3>Jobmate</h3>
              <p>
                To help frustrated job seekers actually filter jobs to tailor
                their needs! This platform will help job searching easier and
                more time efficent.
              </p>
              <br />
              <u>
                <p>Features (Work in progress):</p>
              </u>
              <br />
              <p>
                • In browser plug-in to remind users follow-up with job
                applications
              </p>
              <h4>
                <br />
                <b>
                  <p>
                    <u>Built on</u>: React-Typescript, Python, & Django
                  </p>
                </b>
                <br />
              </h4>
              <h3>
                <Link href="https://github.com/kylejb/JobMate">
                  <a>GitHub</a>
                </Link>
              </h3>
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
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        img {
          height: 15rem;
          border-radius: 10px;
        }
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Chivo', sans-serif;
        }
        a {
          color: 'red';
        }
        .project_container {
          display: flex;
        }
        h1 {
          font-family: 'Chivo';
          font-size: 3.5em;
        }
        h2 {
          text-align: center;
          font-family: 'Chivo';
          font-size: 2.5em;
        }
        a {
          color: inherit;
          text-decoration: none;
        }

        .card {
          margin: 1rem;
          flex-grow: 1;
          flex-basis: 40%;
          padding: 1.5rem;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          text-align: center;
        }

        .project_container:hover .card:hover {
          transform: scale(1);
          filter: blur(0px);
          opacity: 1;
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
            0 2px 10px 0 rgba(0, 0, 0, 0.12);
        }
        .project_container:hover .card {
          filter: blur(1px);
          opacity: 0.5;
          transform: scale(0.98);
          box-shadow: none;
        }

        .image_pointer:hover {
          border-color: #000;
        }
        .card h3 {
          font-family: 'Chivo';
          margin: 0 0 1rem 0;
          font-size: 2rem;
          color: #232946;
        }
        .card h4 {
          font-family: 'Chivo';
          margin: 0 0 1rem 0;
          font-size: 1.2rem;
          color: #232946;
        }

        .card p {
          font-family: 'Overpass';
          margin: 0;
          font-size: 1.2rem;
          line-height: 1.5;
          color: #232946;
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
         {
          /* Mobile query */
        }
        @media only screen and (max-width: 1450px) {
          .project_container {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
