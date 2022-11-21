import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { TypeHomeProduct, TypeProductFields } from "../common/content-types";
import Featured from "../components/featured/Featured.component";
import Product from "../components/product/Product.component";
import client from "../lib/contentful";

interface PageProps {
  featuredProducts: TypeHomeProduct[];
  newProducts: TypeProductFields[];
}

const Home: NextPage<PageProps> = ({ featuredProducts, newProducts }) => {
  return (
    <>
      <Head>
        <title>PC Mart</title>
        <meta name="description" content="Pc part shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured products={featuredProducts} />

      <h1>New Products</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {newProducts.map((product) => (
          <Product key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const featuredProducts = await client.getEntries({
    content_type: "homeProduct",
    select: "fields",
  });

  const newProductsRes = await client.getEntries({
    content_type: "product",
    order: "-sys.createdAt",
    limit: 10,
    select:
      "fields.name,fields.slug,fields.brand,fields.price,fields.images,fields.description",
  });

  const newProducts = newProductsRes.items.map((product) => product.fields);

  return {
    props: { featuredProducts: featuredProducts.items, newProducts },
  };
};
