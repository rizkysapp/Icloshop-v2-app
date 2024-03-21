import Image from "next/image";
import Layout from "./components/layouts/Layout";
import Container from "./components/Container";
import Search from "./components/ui/Search";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <Layout>
          <section className="flex-center mt-20"></section>
        </Layout>
      </Container>
    </main>
  );
}
