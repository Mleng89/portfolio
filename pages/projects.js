import Head from 'next/head';
import Link from 'next/link';
import Layout from './layout';

export default function Projects() {
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
                <h3>Mental Health Space</h3>
                <p>
                  Two projects currently being built for users to use in their
                  daily lives.
                </p>
                <p>
                  <u>Built on</u>: React, TypeScript
                </p>
                <Link href="https://grounding-nine.vercel.app/" legacyBehavior>
                  <a target="_blank" rel="noreferrer">
                    Deep Breaths
                  </a>
                </Link>
                <br />
                <Link href="https://lil-pause.vercel.app/" legacyBehavior>
                  <a target="_blank" rel="noreferrer">
                    Lil-Pause
                  </a>
                </Link>
              </div>

              <div className="card">
                <h3>Notables</h3>
                <p>
                  A WYSIWYG where users can take notes in plain text AND create
                  code snippets within their document!
                </p>
                <p>
                  <u>Built on</u>: HTML, CSS, JS, React, Redux, Express, Docker
                </p>
                <a
                  href="https://github.com/2011-libra/notables"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="image_pointer"
                    src="/notables.png"
                    alt="Notables project screenshot"
                  />
                </a>
                <br />
                <Link href="https://youtu.be/cvxI8c0_3U4" legacyBehavior>
                  <a target="_blank" rel="noreferrer">
                    Click here for the presentation & demo!
                  </a>
                </Link>
              </div>

              <div className="card">
                <h3>The Cellar</h3>
                <p>E-commerce website for the purchase of wine!</p>
                <p>
                  <u>Built on</u>: React, Redux, Express, PostgreSQL
                </p>
                <a
                  href="https://github.com/Team-Kappa/TheCellar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/thecellar.png"
                    className="image_pointer"
                    alt="The Cellar project screenshot"
                  />
                </a>
              </div>

              <div className="card">
                <h3>Into the Abyss</h3>
                <p>A dungeon crawling card game.</p>
                <p>
                  <u>Built on</u>: HTML and JavaScript (Phaser.js)
                </p>
                <a
                  href="https://mleng89.github.io/Stackathon/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/IntoTheAbyss.png"
                    className="image_pointer"
                    alt="Into the Abyss screenshot"
                  />
                </a>
              </div>
            </div>

            <h2>In the works:</h2>

            <div className="project_container">
              <div className="card">
                <h3>EduBase</h3>
                <p>
                  A platform for teachers to upload and share lesson plans, with
                  the ability to leave comments & feedback.
                </p>
                <p>
                  <u>Features:</u> A personalized calendar with to-dos to help
                  organize lessons.
                </p>
                <p>
                  <u>Built on</u>: React & Firebase
                </p>
                <a
                  href="https://github.com/Mleng89/edubase"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <br />
                <a
                  href="https://mleng89.github.io/edubase/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed
                </a>
              </div>

              <div className="card">
                <h3>Jobmate</h3>
                <p>
                  Helping job seekers filter and track applications, reducing
                  time and frustration.
                </p>
                <p>
                  <u>Features:</u> Browser plugin reminders to follow up on job
                  applications.
                </p>
                <p>
                  <u>Built on</u>: React-Typescript, Python, Django
                </p>
                <a
                  href="https://github.com/kylejb/JobMate"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
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

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Chivo', sans-serif;
        }

        img {
          height: auto;
          max-width: 100%;
          border-radius: 10px;
          object-fit: cover;
        }

        .project_container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        h1 {
          font-size: 3.5em;
          font-family: 'Chivo';
          text-align: center;
        }

        h2 {
          font-size: 2.5em;
          font-family: 'Chivo';
          text-align: center;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          text-align: center;
          width: 300px;
          box-sizing: border-box;
          transition: all 0.3s ease;
        }

        .project_container:hover .card {
          filter: blur(1px);
          opacity: 0.5;
          transform: scale(0.98);
        }

        .project_container:hover .card:hover {
          filter: none;
          opacity: 1;
          transform: scale(1.03);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .image_pointer:hover {
          border: 2px solid #0070f3;
        }

        .card h3,
        .card h4,
        .card p {
          color: #232946;
        }

        @media only screen and (max-width: 768px) {
          .project_container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
