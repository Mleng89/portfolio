import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
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
            <h1>My Projects:</h1>
            <div className="project_container">
              <div className="card">
                <h3>The Cellar</h3>
                <h4>Description:</h4>
                <p>
                  A mock wine e-commerce website. With login capability that
                  allows for persistent product storage in cart
                </p>
                <h4>
                  <br />
                  <b>
                    <u>Built on</u>: React, Redux, Express, PostgreSQL
                  </b>
                </h4>
                <br />
                <Link href="https://github.com/Team-Kappa/GraceShopper">
                  <a>GitHub</a>
                </Link>{' '}
                | {''}
                <Link href="https://thecellar.herokuapp.com/">
                  <a>Deployed site</a>
                </Link>
              </div>
              <div className="card">
                <h3>Notables</h3>
                <h4>Description:</h4>
                <p>A markdown editor that can run integrated code snippets.</p>
                <h4>
                  <br />
                  <b>
                    <u>Built on</u>: HTML, CSS, JS, React, Redux, Express,
                    Docker
                  </b>
                </h4>
                <br />
                <Link href="https://github.com/2011-libra/notables">
                  <a>GitHub</a>
                </Link>{' '}
                | {''}
                <Link href="http://3.128.61.184:8080/">
                  <a>Deployed Site</a>
                </Link>
              </div>
              <div className="card">
                <h3>Into the Abyss</h3>
                <h4>Description:</h4>
                <p>Dungeon crawling card game made in Phaser.js</p>
                <h4>
                  <br />
                  <b>
                    <u>Built on</u>: HTML and Phaser.js
                  </b>
                </h4>
                <br />
                <Link href="https://github.com/Mleng89/Stackathon">
                  <a>GitHub</a>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
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
        .project_container {
          display: flex;
        }
        h1 {
          font-family: 'Chivo';
          font-size: 3.5em;
        }
        a {
          color: inherit;
          text-decoration: none;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
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
          background: #b8c1ec;
        }
        * {
          box-sizing: border-box;
          color: #121629;
        }
         {
          /* Mobile query */
        }
        @media only screen and (max-width: 768px) {
          .project_container {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
