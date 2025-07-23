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
            <h1>Development:</h1>

            <div className="project_container">
              <div className="card">
                <h3>Deep Breaths</h3>
                <p>
                  A grounding tool to help users regulate their breathing and
                  stay present.
                </p>
                <p>
                  <u>Built on</u>: React, TypeScript, Tailwind
                </p>
                <img
                  className="image_pointer"
                  src="/box-breathing.png"
                  alt="Deep Breaths project screenshot"
                />
                <Link href="https://grounding-nine.vercel.app/" legacyBehavior>
                  <a target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </Link>
              </div>

              <div className="card">
                <h3>Lil-Pause</h3>
                <p>
                  A simple tool to encourage users to take short breaks by
                  creating journal entries.
                </p>
                <p>
                  <u>Built on</u>: React, TypeScript, Tailwind
                </p>
                <img
                  className="image_pointer"
                  src="/entries.png"
                  alt="Lil-Pause project screenshot"
                />
                <Link href="https://lil-pause.vercel.app/" legacyBehavior>
                  <a target="_blank" rel="noreferrer">
                    View Project
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
              <div className="project_container">
                <div className="card">
                  <h3>EduBase: Work in Progress</h3>
                  <p>
                    A platform for teachers to upload and share lesson plans,
                    with the ability to leave comments & feedback.
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
              </div>
            </div>

            <h2>Written Content:</h2>
            <div className="project_container">
              <div className="card">
                <h3>Chat API Documentation</h3>
                <p>
                  Designed with developers in mind, featuring concise examples
                  and clear step-by-step workflows for seamless integration.
                </p>
                <p>
                  <u>Written using</u>: Markdown
                </p>
                <a
                  href="https://gist.github.com/Mleng89/099e95ca15751e9e9dd053c86cd67cde"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Documentation
                </a>
              </div>
              <div className="project_container">
                <div className="card">
                  <h3>Development Workflow Guide</h3>
                  <p>
                    A detailed reference for developers, covering branching
                    strategies, code reviews, CI/CD pipelines, deployment
                    procedures, troubleshooting, and best practices.
                  </p>
                  <p>
                    <u>Written using</u>: Markdown
                  </p>
                  <a
                    href="https://gist.github.com/Mleng89/254ef4967aa4f3013e370a20c57afaab"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Documentation
                  </a>
                </div>
              </div>

              <div className="project_container">
                <div className="card">
                  <h3>React Project Setup with Docker and Nginx</h3>
                  <p>
                    A detailed guide on containerizing a React app with Docker
                    and serving it using Nginx.
                  </p>
                  <p>
                    <u>Format</u>: Medium article (Step-by-step tutorial)
                  </p>
                  <a
                    href="https://mleng89.medium.com/setting-up-a-react-project-with-docker-and-nginx-5d2917a76e68"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Documentation
                  </a>
                </div>
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
          transform: scale(0.98);
        }

        .project_container:hover .card:hover {
          filter: none;
          opacity: 1;
          transform: scale(1.03);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
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
