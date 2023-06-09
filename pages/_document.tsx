import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate Cover Letters for your Job Applications."
          />
          <meta property="og:site_name" content="coverletter.fyi" />
          <meta
            property="og:description"
            content="Generate Cover Letters for your Job Applications."
          />
          <meta property="og:title" content="Cover Letter Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Cover Letter Generator" />
          <meta
            name="twitter:description"
            content="Generate Cover Letters for your Job Applications."
          />
          <meta
            property="og:image"
            content="https://coverletter.fyi/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://coverletter.fyi/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
