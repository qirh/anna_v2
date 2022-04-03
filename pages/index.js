import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Anna K</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="video"
        dangerouslySetInnerHTML={{
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
      `,
        }}
      ></div>

      <div className="name">
        <h1>Anna Kukla</h1>
      </div>
      
      <div className="links">
        <a href="https://www.imdb.com/name/nm7706290/">IMDB</a>
        <a href="https://drive.google.com/file/d/1qwZzVOZ4PbAedrvirdGsIDDWAoAwFOoJ">
          Resume
        </a>
        <a href="mailto:kukla.anna.kukla@gmail.com">Email</a>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          min-height: 100vh;
        }

        .video,
        .background-video {
          z-index: 0;
        }

        .container {
          min-height: 100vh;
          min-width: 100vh;
          position: relative;
          overflow: hidden;
        }
        .background-video {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
        }

        .name,
        .links {
          position: absolute;
          z-index: 1;
        }
        .name {
          top: 80%;
          left: 20%;
        }
        .links {
          top: 90%;
          left: 35%;
        }
        .links a:not(:last-child) {
          padding: 0 12px 0 0;
        }
        a {
          color: rgb(16, 162, 245);
        }

        @media (max-width: 600px) {
        }
      `}</style>
    </div>
  );
}
