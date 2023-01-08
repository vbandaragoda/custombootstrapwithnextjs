import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Net Ninja Pro - The Book</title>
        <meta name="description" content="Net ninja pro book" />\
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navbar />
      <Landing />
    </>
  );
}
