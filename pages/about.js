import Head from 'next/head';
import Layout from './layout';

export default function About() {
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
            <img className="me_image" src="/media_me1.png" alt="Matthew Leng" />

            <div className="about_context card">
              <h2>Hello!</h2>
              <p>
                My name is Matthew Leng, born and raised in Brooklyn, New York.
              </p>
              <p>
                I was a pre-school teacher for almost a decade. Although I
                absolutely loved the profession, I felt I could make a bigger
                impact by combining my love for education, learning, and
                technology.
              </p>
              <p>
                That’s when I rediscovered my passion for software engineering.
                After taking various online courses, I joined Fullstack Academy
                to pursue structured learning. Since then, I've been building
                applications to solve real-world problems and make a positive
                impact.
              </p>
              <p>
                When I’m not learning or coding, you can find me playing video
                games, reading, bouldering, or training — I’m an Olympic
                weightlifting athlete!
              </p>
            </div>
          </div>

          <hr className="line_break" />

          <h3>Experience</h3>
          <div className="timeline">
            {[
              {
                title: 'Frontend Developer & Technical Writer',
                company: 'Freelance',
                years: '2025 - Present',
                description:
                  'Helping clients build applications to solve real-world problems.'
              },
              {
                title: 'Founding Frontend Developer',
                company: 'Stealth Startup',
                years: '2024 - 2025',
                description:
                  'Designed and implemented scalable front-end architecture, developed an AI feedback prototype improving model accuracy, and collaborated with leadership to refine UX/UI.'
              },
              {
                title: 'Associate Software Developer',
                company: 'Columbia University',
                years: '2023 – 2024',
                description:
                  'Led development projects, upgraded legacy frameworks, and mentored an intern to enhance productivity and ensure timely delivery.'
              },
              {
                title: 'ServiceNow Developer',
                company: 'Sema4',
                years: '2021 – 2022',
                description:
                  'Streamlined workflows and enhanced cross-departmental efficiency through automation.'
              },
              {
                title: 'Pre-School Teacher',
                company: 'New York',
                years: '2012 – 2020',
                description:
                  'Provided early childhood education and fostered a nurturing environment to support children’s growth and development.'
              }
            ].map((item, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{item.title}</h3>
                    <span>{item.years}</span>
                  </div>
                  <h4 className="timeline-company">{item.company}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="line_break" />

          <h3>Tech Stack</h3>

          {/* REUSE EXISTING TECH STACK CODE HERE */}
        </Layout>
      </main>

      <style jsx>{`
        .container {
          min-height: 80vh;
          width: 100%;
          padding: 0 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .line_break {
          height: 1px;
          background: #232946;
          margin: 30px auto;
          width: 10%;
          border: none;
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
          font-size: 2em;
          text-align: center;
        }

        h3 {
          font-size: 2rem;
          text-align: center;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        h4 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .me_image {
          margin: 1rem;
          padding: 0.5rem;
          height: 55vh;
          width: auto;
          border-radius: 50%;
        }

        .about_context {
          margin: 2%;
          padding: 2%;
          max-width: 600px;
        }

        .card p {
          margin-bottom: 1rem;
          font-size: 1.2rem;
          line-height: 1.6;
          font-family: 'Overpass', sans-serif;
        }

        .timeline {
          position: relative;
          margin: 20px 0;
          padding-left: 40px;
          border-left: 2px solid #ddd;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 20px;
        }

        .timeline-dot {
          position: absolute;
          left: -12px;
          top: 5px;
          width: 20px;
          height: 20px;
          background-color: #0070f3;
          border-radius: 50%;
          border: 2px solid #fff;
        }

        .timeline-content {
          margin-left: 20px;
          background: #f9f9f9;
          padding: 1rem;
          border-radius: 5px;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .timeline-header h3 {
          margin: 0;
          font-size: 1.1em;
        }

        .timeline-header span {
          font-size: 0.95em;
          color: #666;
        }

        .timeline-company {
          margin: 4px 0;
          font-weight: normal;
          font-size: 1em;
          color: #333;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            padding: 1rem;
          }

          .me_image {
            height: auto;
            width: 75%;
            margin-top: 5vh;
          }

          .timeline-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }

          .timeline-content {
            padding: 0.75rem;
            font-size: 0.95rem;
          }

          h2 {
            font-size: 1.5em;
          }

          h3 {
            font-size: 1.25rem;
          }

          h4 {
            font-size: 1.1rem;
          }

          .card p {
            font-size: 1rem;
            line-height: 1.4;
          }

          .timeline-company {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: white;
        }

        * {
          box-sizing: border-box;
          color: #121629;
        }
      `}</style>
    </div>
  );
}
