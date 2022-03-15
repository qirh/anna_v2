import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Anna K</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div dangerouslySetInnerHTML={{
        __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          type="video/mp4"
          src="https://d2qxpcg73pnz75.cloudfront.net/annatv_6mb.mp4"
          class="background-video"
        />,
      ` }}></div>

      <main>

        <img
          src="https://d2qxpcg73pnz75.cloudfront.net/one-crop.png"
          className="image"
          ></img>

        <span>
          hey! I'm Anna Kukla. I work the most amazing and best Costumer in the whole world. I specialise in Film & TV and have worked on some pretty cool projets.
          If you would liek to connect. This is my LinkedIn, IMDB and CV. I'm also reachable over email
        </span>

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

        .image {
          height: 350px;
          width: 350px;
          opacity: 0.9;
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
