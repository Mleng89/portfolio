import Head from 'next/head';
import Link from 'next/link';
import Layout from './layout';
import { Typewriter } from 'react-simple-typewriter';

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
            </div>
            <div className="typewriter_media">
              <Typewriter
                words={[
                  'I am a former pre-school teacher turned software engineer and technical writer!'
                ]}
                loop={0}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>

            <div className="resume_button_media">
              <Link
                href="https://drive.google.com/file/d/1Z5IVC4-HQMMpPIOqpMQsbOnvTdVxKNGY/view?usp=sharing"
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
          padding: 0.75em 1.5em;
          margin-top: 1.5em;
          border-radius: 0.5em;
          text-decoration: none;
          font-family: 'Chivo', sans-serif;
          font-weight: 500;
          color: white;
          background-color: #0070f3;
          text-align: center;
          transition: background 0.3s, transform 0.2s;
          box-shadow: 0 4px 14px rgba(0, 118, 255, 0.39);
        }

        a.resume_button:hover {
          background-color: #0059c1;
          transform: translateY(-2px);
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
          .typewriter_media{
            margin: 0
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
