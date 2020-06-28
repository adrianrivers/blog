/** @jsx jsx */
import { jsx } from "theme-ui";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Layout from "../components/layout/layout";

export default class SiteDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Layout>
            <Header></Header>
            <main sx={{ padding: "8px" }} className="main--content">
              <Main />
            </main>
            <Footer></Footer>
            <NextScript />
          </Layout>
        </body>
      </Html>
    );
  }
}
