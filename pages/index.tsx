import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PC Mart</title>
        <meta name="description" content="Pc part shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Main</h1>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Home;
