import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anna K</title>
        <meta name="description" content="Anna Kukla" />
        <meta name="robots" content="index, follow" />

        <meta name="theme-color" content="#4d5b7c" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
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

      <div className="content">
        <h1 className="name">
          anna kukla
        </h1>

        <div className="links">
          <a
            style={{ color: "#DFB4CB" }}
            href="https://www.imdb.com/name/nm7706290"
          >
            IMDB
          </a>
          <a
            style={{ color: "#0D9FF3" }}
            href="https://drive.google.com/file/d/1hnbYOR3etL_mqk0Lh5x_YoFjrV44W2WG"
          >
            RESUME
          </a>
          <a
            style={{ color: "#E24181" }}
            href="mailto:kukla.anna.kukla@gmail.com"
          >
            EMAIL
          </a>
        </div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: "dogsmoke-thundercat";
          src: url("/fonts/DogsmokeThundercat.ttf");
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

        .video,
        .background-video {
          z-index: 0;
        }

        .background-video {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
        }

        .content {
          position: absolute;
          z-index: 1;
          left: 5%;
          bottom: 5%;
        }
        .name {
          color: lightskyblue;
          display: inline;
          font-family: "dogsmoke-thundercat", Times;
          font-size: 200px;
          font-weight: bold;
        }
        .links {
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

        @media screen and (max-width: 1150px) {
          // breakpoint for the name so that it stays on one line
          .name {
            font-size: 150px;
          }
        }
        @media screen and (max-width: 840px) {
          // breakpoint for the name so that it stays on one line
          .name {
            font-size: 100px;
            top: 60%;
          }
        }
        @media screen and (max-width: 560px) {
          // breakpoint for the name so that it stays on one line
          .name {
            top: 65%;
            font-size: 70px;
          }
        }

        @media screen and (max-height: 920px) and (max-width: 420px) {
          // big phone   
          .name {
            top: 75%;
            font-size: 60px;
          }
          .links {
            top: 90%;
            left: 8%;
          }
        }
        @media screen and (max-height: 700px) and (max-width: 390px) {
          // small phone
          .name {
            top: 65%;
          }
        }
      `}</style>
    </div>
  );
}
