import Head from "next/head";

import { useEffect } from "react";

let colors = [
  "#2ACC5E", // green
  "#DFB4CB", // pink
  "#0D9FF3", // blue
  "#E24181", // red
  "#F8C331", // yellow
];
function setLinkColors() {
  Array.from(document.getElementsByTagName("a")).forEach((e) => {
    e.style.color = colors[Math.floor(Math.random() * colors.length)];
  });
}

export default function Home() {
  useEffect(() => {
    setLinkColors();
    setInterval(() => {
      setLinkColors();
    }, 5001);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Anna K</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="theme-color" content="#4d5b7c" />

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
          font-family: "Open Sans", Times;
        }

        html,
        body {
          padding: 0;
          margin: 0;
        }

        .video,
        .background-video {
          z-index: 0;
        }

        .container {
          min-height: 100vh;
           /* mobile viewport bug fix */
           min-height: -webkit-fill-available;
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
      `}</style>
    </div>
  );
}
