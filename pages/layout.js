import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children, title = 'Matthew Leng' }) {
  return (
    <div className="layout-container">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo&family=Overpass&display=swap"
          rel="stylesheet"
        />
        <nav>
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/projects" legacyBehavior>
                <a>Projects</a>
              </Link>
            </li>

            <li>
              <Link href="/about" legacyBehavior>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="https://mleng89.medium.com/" legacyBehavior>
                <a target="_blank">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {children}

      <footer>
        <div className="footer_text">
          <div>
            <Link href="https://github.com/Mleng89" legacyBehavior>
              <a className="github">
                <img src="/github.svg" width="20px" height="20px" />
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://mleng89.medium.com/" legacyBehavior>
              <a className="medium">
                <img src="/medium.svg" width="20px" height="20px" />
              </a>
            </Link>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/in/matthew-leng/"
              legacyBehavior
            >
              <a>
                <img src="/linkedin.svg" width="20px" height="20px" />
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://twitter.com/matthewleng" legacyBehavior>
              <a>
                <img src="/twitter.svg" width="20px" height="20px" />
              </a>
            </Link>
          </div>
          <div>
            <a href="mailto:mleng89@gmail.com">
              <button className="button">Contact me</button>
            </a>
          </div>
        </div>

        <p className="footer_name"> 2021 Matthew Leng</p>
      </footer>
      <style jsx>
        {`
          nav {
            background-color: #303f9f;
            box-shadow: 1px 1px #121629;
            width: 100vw;
            min-height: 55px;
            font-family: 'Overpass', sans-serif;
          }
          nav a {
            font-size: 1.5em;
            color: white;
          }
          nav a:hover {
            opacity: 0.4;
            font-color: grey;
          }
          ul {
            display: flex;
            justify-content: center;
            list-style-type: none;
            margin: 0;
            padding: 10px 0; /* Vertical padding for links */
          }
          nav ul li {
            margin-left: 50px;
          }
          footer {
            padding-top: 25px;
            background-color: #303f9f;
            min-height: 100px;
            width: 100vw;
          }
          .footer_text {
            display: flex;
            justify-content: center;
          }
          .footer_text > div {
            margin-left: 30px;
          }
          .footer_name {
            text-align: center;
            color: white;
            font-type: 'Chivo';
          }
          .footer_text > div > a > img:hover {
            filter: invert(35%);
          }
          .github,
          .medium {
            filter: invert(100);
          }
          .button {
            margin-top: -10px;
            border-width: 1px;
            border-color: rgba(0 0 0);
            border-radius: 0.5rem;
            background-color: rgba(234, 244, 244);
            box-shadow: 0 0 1px 0;
            padding: 0.5rem;
          }
          .button:hover {
            filter: invert(20%);
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
          .main-container {
            width: 100vw;
          }
          nav {
            width: 100vw;
          }
          footer {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
