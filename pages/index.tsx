import type { GetServerSideProps, NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { TypeCategory } from "../common/content-types";
import client from "../lib/contentful";

interface PageProps {
  categories: TypeCategory[];
}

const Home: NextPage<PageProps> = ({ categories }) => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>PC Mart</title>
        <meta name="description" content="Pc part shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home</h1>
      <hr />
      {categories.map(({ fields: category }) => (
        <div key={category.slug}>
          <Link href={`/category/${category.slug}`}>{category.name}</Link>
        </div>
      ))}
      <hr />
      {session ? (
        <>
          Signed in as {session.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      <div>
        <Link href="/admin">Admin</Link>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await client.getEntries({ content_type: "category" });
  return {
    props: { categories: categories.items },
  };
};
