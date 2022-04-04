import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Anna K</title>
        <meta name="theme-color" content="#4d5b7c" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
        <h1>anna kukla</h1>
      </div>

      <div className="links">
        <a 
          style={{color: "#DFB4CB"}}
          href="https://www.imdb.com/name/nm7706290/">IMDB</a>
        <a
          style={{color: "#0D9FF3"}}
          href="https://drive.google.com/file/d/1qwZzVOZ4PbAedrvirdGsIDDWAoAwFOoJ">
          RESUME
        </a>
        <a
          style={{color: "#E24181"}}
          href="mailto:kukla.anna.kukla@gmail.com">EMAIL</a>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: "dogsmoke";
          src: url("/fonts/Dogsmoke.ttf");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          padding: 0;
          margin: 0;
        }
        a {
          font-family: "Montserrat Alternates", Times;
          text-decoration: none;
        }
        h1 {
          font-family: "dogsmoke", Times;
          font-size: 200px;
        }

        .video,
        .background-video {
          z-index: 0;
        }

        .container {
          min-height: 100vh;
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
          left: 5%;
        }
        .name {
          top: 50%;
          color: lightskyblue;
        }
        .links {
          top: 90%;
          letter-spacing: 2px;
        }
        .links a:not(:last-child) {
          padding: 0 12px 0 0;
        }
        @media not all and (min-resolution: 0.001dpcm) {
          @supports (-webkit-appearance: none) {
            /* mobile viewport bug fix */
            body {
              min-height: -webkit-fill-available;
            }
            html {
              height: -webkit-fill-available;
            }
            .container {
              min-height: -webkit-fill-available;
            }
          }
        }

        @media screen and (max-height: 900px) {
          h1 {
            font-size: 60px;
          }
          .name {
            top: 75%;
          }
          .links {
            top: 90%;
            left: 8%;
          }
        }
      `}</style>
    </div>
  );
}
