import DocumentHead from "../components/head/document-head";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <Layout>
      <DocumentHead></DocumentHead>
      <Header></Header>
      <main className="main--content">Some content</main>
      <Footer></Footer>
    </Layout>
  );
}
