import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitalProps(ctx) {
    const initialProps = await Document.getInitalProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link href="https://fonts.googleapis.com/css2?family=Do Hyeon&display=swap" rel="stylesheet"></link> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument