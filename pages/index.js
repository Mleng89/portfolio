import Head from 'next/head';
import Layout from './layout';
import Typical from 'react-typical';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout title="Home | Matthew Leng">
          <link
            href="https://fonts.googleapis.com/css2?family=Chivo&family=Overpass&display=swap"
            rel="stylesheet"
          />
          <div className="container">
            <img src="/me.png" className="me_image" />
            <div className="title">
              <h2>
                Hello! My name is{' '}
                <span className="title_name">Matthew Leng</span>
              </h2>
              <Typical
                steps={[
                  'I am a former pre-school teacher turned software engineer!',
                  100
                ]}
                loop="2"
                wrapper="h6"
              />
            </div>
          </div>
        </Layout>
      </main>

      <style jsx>{`
        .container {
          min-height: 90vh;
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
        h2 {
          font-family: 'Overpass', sans-serif;
        }
        .title {
          margin-left: 2%;
          font-size: 2em;
        }
        .title_name {
          color: #4e5265;
        }
        .me_image {
          height: 50vh;
          width: auto;
          border-radius: 50%;
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

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
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

/*
background: linear-gradient(
            -55deg,
            #9fa5d5,
            #b8c1ec,
            #eebbc3,
            #eebbc3
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
*/
