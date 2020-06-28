import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/header/header";

export default class SiteDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <Header></Header>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
