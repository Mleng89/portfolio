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
              <Link href="/about">
                <a>About</a>
              </Link>{' '}
              |
            </li>

            <li>
              <Link href="/projects">
                <a>Projects</a>
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
        </div>
        <p className="footer_name">© 2021 Matthew Leng</p>
      </footer>
      <style jsx>
        {`
          .container {
            border: 1px black solid;
          }
          nav {
            border: 1px black solid;
            min-height: 55px;
            min-width: 100px;
          }
          ul {
            display: flex;
            justify-content: center;
            list-style-type: none;
            margin: 0;
            margin-top: 10px;
            padding: 0;
          }
          .footer_text {
            display: flex;
            justify-content: center;
          }
          .footer_text > div {
            margin-left: 10px;
          }
          .footer_name {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
