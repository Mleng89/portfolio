import Head from 'next/head';
import Link from 'next/link';
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
              <div className="typical_media">
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
            <div className="resume_button_media">
              <Link
                href="https://drive.google.com/file/d/1bHpLAa831vWyA32uQ7gaMj0ziPLYalBX/view?usp=drive_link"
                legacyBehavior
              >
                <a className="resume_button" target="_blank" rel="noreferrer">
                  View my Resume{' '}
                </a>
              </Link>
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
          color: #af3d4e;
        }

        a.resume_button {
           display: inline-block;
           padding: 1em 2em;
           margin: 0 0.3em 1.5em 0;
           border-radius: 1em;
           box-sizing: border-box;
           text-decoration: none;
           font-family: 'Chivo', sans-serif;
           font-weight: 300;
           color: #ffffff;
           background-color: #af3d4e;
           text-align: center;
           transition: all 0.2s;
        }
        a.resume_button:hover {
          filter: saturate(1.5) drop-shadow(5px 5px rgba(0, 0, 0, 0.16));
        }
        .me_image {
          margin-top: 1rem;
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

         {
          /* a {
          color: inherit;
          text-decoration: none;
        } */
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: white
        }
        * {
          box-sizing: border-box;
          color: #121629;
        }
       @media only screen and (max-width: 768px){
         .container {
            display: flex;
            flex-direction: column;
          }
          .typical_media{
            margin: 0;
          }
          .resume_button_media{
             margin-bottom: 2em;
          }
          .me_image {
            margin-top: 5vh;
          }

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

                  .bouncy {
           animation: bouncy 10s infinite linear;
           position: relative;
        }
        @keyframes bouncy {
           0% {
            top: 0em;
          }
           40% {
            top: 0em;
          }
           43% {
            top: -0.9em;
          }
           46% {
            top: 0em;
          }
           48% {
            top: -0.4em;
          }
           50% {
            top: 0em;
          }
           100% {
            top: 0em;
          }
        }
*/
