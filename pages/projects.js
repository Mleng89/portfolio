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
          <div className="container">
            <Image src="/pls.png" width="100px" height="100px" />
            <h1>My Projects:</h1>
            <div className="project_container">
              <div className="card">
                <h3>The Cellar</h3>
                <h4>Description:</h4>
                <p>
                  A mock wine e-commerce website. With login capability that
                  allows for persistent product storaeg in cart
                </p>
                <p>
                  <br />
                  <b>
                    <u>Built on</u>: React, Redux, Express, PostgreSQL
                  </b>
                </p>
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
                <p>
                  <br />
                  <b>
                    <u>Built on</u>: HTML, CSS, JS, React, Redux, Express,
                    Docker
                  </b>
                </p>
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
                <p>
                  <br />
                  <b>
                    <u>Built on</u>: HTML and Phaser.js
                  </b>
                </p>
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

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }
        .project_container {
          display: flex;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
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
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 2rem;
          color: #232946;
        }
        .card h4 {
          margin: 0 0 1rem 0;
          font-size: 1.2rem;
          color: #232946;
        }
        .card p {
          margin: 0;
          font-size: 1.2rem;
          line-height: 1.5;
          color: #232946;
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  );
}
