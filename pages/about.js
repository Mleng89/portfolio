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
            <img className="me_image" src="/me1.jpg" />
            <div className="about_context card">
              <h2>Hello!</h2>
              <p>
                My name is Matthew Leng, I was born and raised in New York City,
                I currently reside in Brooklyn.
              </p>
              <br />
              <p>
                When I am not learning, you can find me playing video games,
                reading, or training. (I am an Olympic weightlifting athlete!)
              </p>
              <br />
              <p>
                Currently, I am dipping my feet in React frameworks such as
                Gatsby & Next.js, Typescript, Electron, and Firebase.
              </p>
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
           {
            /* flex-direction: column; */
          }
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
          font-size: 4em;
          font-family: 'Chivo';
        }

        .me_image {
          height: 55vh;
          width: auto;
          border-radius: 50%;
        }
        .about_context {
          margin-left: 2%;
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

          text-decoration: none;
        }

        .card:hover,
        .card:focus,
        .card:active {
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
      `}</style>
    </div>
  );
}
