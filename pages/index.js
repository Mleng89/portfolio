import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
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
          <div className="container">
            <h2 className="title">
              Hello! My name is <span className="title_name">Matthew Leng</span>
            </h2>
            <Typical
              steps={[
                'I am a former pre-school teacher turned software engineer!',
                100
              ]}
              loop="2"
              wrapper="h2"
            />
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
        }
        .title {
          font-size: 3em;
        }
        .title_name {
          color: #232946;
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

        .title:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
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

        * {
          box-sizing: border-box;
          color: #121629;
        }
      `}</style>
    </div>
  );
}
