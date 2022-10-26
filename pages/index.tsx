import { Category } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import prisma from "../lib/prismadb";

const Home: NextPage<{
  categories: Category[];
}> = ({ categories }) => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>PC Mart</title>
        <meta name="description" content="Pc part shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Main</h1>
        <hr />
        {categories.map((category) => (
          <div key={category.id}>
            <Link href={`/category/${category.slug}`}>
              <a>{category.name}</a>
            </Link>
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
      </main>

      <footer>
        <Link href="/admin">Admin</Link>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const categories = await prisma.category.findMany();
  return {
    props: { categories },
  };
};
