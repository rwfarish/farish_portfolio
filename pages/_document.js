/**
 * Caution: Consider this file when using NextJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or react-scripts version
 */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href="/assets/favicon.ico" />
            <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/assets/favicons/apple-icon-57x57.png"
            />
            <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/assets/favicons/apple-icon-60x60.png"
            />
            <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/assets/favicons/apple-icon-72x72.png"
            />
            <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/assets/favicons/apple-icon-76x76.png"
            />
            <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/assets/favicons/apple-icon-114x114.png"
            />
            <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/assets/favicons/apple-icon-120x120.png"
            />
            <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/assets/favicons/apple-icon-144x144.png"
            />
            <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/assets/favicons/apple-icon-152x152.png"
            />
            <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/favicons/apple-icon-180x180.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/assets/favicons/android-icon-192x192.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicons/favicon-32x32.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/assets/favicons/favicon-96x96.png"
            />
            <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicons/favicon-16x16.png"
            />
            <link rel="manifest" href="/assets/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta
            name="msapplication-TileImage"
            content="/assets/favicons/ms-icon-144x144.png"
            />
            <meta name="theme-color" content="#ffffff" />
            <meta
            name="description"
            content="Developer portfolio page for Bo Farish"
            />
            <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta
            property="og:image"
            content="/assets/images/illustrations/portfolio-image.png"
            />
            <meta
            property="og:title"
            content="Bo Farish | Developer Portfolio"
            />
            <meta
            property="og:description"
            content="Developer portfolio page for Bo Farish"
            />
            <meta property="og:url" content="https:www.bofarish.dev" />
            <link
            href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
            rel="stylesheet"
            />
            <script
            src="https://kit.fontawesome.com/4c273e6d43.js"
            crossOrigin="anonymous"
            ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};