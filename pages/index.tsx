import type { GetServerSideProps, NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { TypeCategory } from "../common/content-types";
import NavMenu from "../components/nav-menu/NavMenu.component";
import client from "../lib/contentful";

const MainContainer = styled.main`
  display: flex;
`;

const Home: NextPage<{ categories: TypeCategory[] }> = ({ categories }) => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>PC Mart</title>
        <meta name="description" content="Pc part shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <NavMenu></NavMenu>
        <div style={{ width: "calc(100% - 209px)", padding: "10px 15px" }}>
          <h1>Home</h1>
          <hr />
          {categories.map(({ fields: category }) => (
            <div key={category.slug}>
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
          <div>
            <Link href="/admin">Admin</Link>
          </div>
        </div>
      </MainContainer>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await client.getEntries({ content_type: "category" });
  return {
    props: { categories: categories.items },
  };
};
