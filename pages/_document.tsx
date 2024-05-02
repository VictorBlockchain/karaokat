import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Bootstrap CSS */}
        <link 
          href="https://stackpath.bootstrapcdn.com/bootstrap/5.5.0/css/bootstrap.min.css" 
          rel="stylesheet" 
        />

        {/* Custom Styles */}
        <style>{`
          :root {
            --header-gradient-start: #f6d365;
            --header-gradient-end: #fda085;
            --footer-background: #ff6b81;
            --nav-button-bg: #7bed9f;
            --main-font: 'Poppins', sans-serif;
          }

          body {
            font-family: var(--main-font);
            background-color: #ffffff;
          }

          .curved-bottom {
            border-bottom-left-radius: 50% 20%;
            border-bottom-right-radius: 50% 20%;
          }

          .curved-top {
            border-top-left-radius: 50% 20%;
            border-top-right-radius: 50% 20%;
          }
          
          header {
            background: linear-gradient(135deg, var(--header-gradient-start) 0%, var(--header-gradient-end) 100%);
            padding: 50px 0;
            text-align: center;
            position: relative;
            z-index: 2;
          }
          
          .nav-link {
            background-color: var(--nav-button-bg);
            border-radius: 50px;
            color: white;
            margin: 0 5px;
            padding: 10px 20px;
            transition: background-color .3s;
          }

          .nav-link:hover {
            background-color: #34d1bf;
          }

          footer {
            background-color: var(--footer-background);
            padding: 30px 0;
            color: white;
            text-align: center;
            clip-path: ellipse(150% 100% at 50% 100%);
          }

          /* Bootstrap overrides */
          .btn-paw {
            background: url('/paw-print.svg') no-repeat center center;
            background-size: 50%;
            border-radius: 50%;
            position: relative;
            transition: transform .3s;
          }

          .btn-paw:hover {
            transform: scale(1.1);
          }

          .music-note {
            width: 30px;
            height: 30px;
            background: url('/music-note.svg') no-repeat center center;
            background-size: contain;
            position: absolute;
            top: 10px;
            right: 10px;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
