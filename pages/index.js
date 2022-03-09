import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Anna K</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <video id="background-video" loop autoPlay muted>
        <source
          src="https://d2qxpcg73pnz75.cloudfront.net/annatv_9mb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      <div dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          type="video/mp4"
          src="https://d2qxpcg73pnz75.cloudfront.net/annatv_9mb.mp4"
          class="background-video"
        />,
      ` }}></div>
      <main>


        <h1 className="title">
          Anna Kukla
        </h1>

      </main>

      <footer>
        Made with 💙 in NYC
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }

        footer {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title {
          text-align: center;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {

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
        }
        .background-video {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 0;
        }
      `}</style>
    </div>
  )
}
