import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function Layout({ children, title = 'Matthew Leng' }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>{' '}
              |
            </li>

            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>{' '}
              |
            </li>

            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {children}

      <footer>
        <div className="footer_text">
          <div>
            <Link href="https://github.com/Mleng89">
              <a>
                <Image src="/github.svg" width="20px" height="20px" />
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://www.linkedin.com/in/matthew-leng/">
              <a>
                <Image src="/linkedin.svg" width="20px" height="20px" />
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://twitter.com/matthewleng">
              <a>
                <Image src="/twitter.svg" width="20px" height="20px" />
              </a>
            </Link>
          </div>
          <div>
            <a href="mailto:mleng89@gmail.com">Contact me</a>
          </div>
        </div>
        <p className="footer_name">© 2021 Matthew Leng</p>
      </footer>
      <style jsx>
        {`
          .container {
            border: 1px black solid;
          }
          nav {
            padding-top: 5px;
            padding-right: 20px;
            box-shadow: 10px 2px 10px grey;
            overflow: hidden;
            min-height: 55px;
            min-width: 100vw;
          }
          nav a:hover {
            background-color: #fffffe;
            opacity: 0.4;
            color: black;
          }
          ul {
            display: flex;
            justify-content: flex-end;
            list-style-type: none;
            margin: 0;
            margin-top: 10px;
            padding: 0;
          }
          footer {
            padding-top: 25px;
            background-color: #d4d8f0;
            min-height: 100px;
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
          }
        `}
      </style>
    </div>
  );
}
