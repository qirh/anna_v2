import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap" rel="stylesheet" />
        <link
            rel="preload"
            href="/fonts/DogsmokeThundercat.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}