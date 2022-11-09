import type { GetServerSideProps, NextPage } from "next";
import { TypeProductFields } from "../common/content-types";
import Product from "../components/product/Product";
import client from "../lib/contentful";

interface PageProps {
  products: TypeProductFields[];
}

const NewProducts: NextPage<PageProps> = ({ products }) => {
  return (
    <div>
      <h1>New Products</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <Product key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const productsRes = await client.getEntries({
    content_type: "product",
    order: "-sys.createdAt",
    limit: 30,
    select:
      "fields.name,fields.slug,fields.brand,fields.price,fields.images,fields.description",
  });

  const products = productsRes.items.map((product) => product.fields);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: { products: products },
  };
};
