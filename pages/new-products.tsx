import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { TypeProduct } from "../common/content-types";
import Product from "../components/product/Product";
import client from "../lib/contentful";

interface PageProps {
  products: TypeProduct[];
}

const NewProducts: NextPage<PageProps> = ({ products }) => {
  return (
    <div>
      <h1>New Products</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(({ fields: product }) => (
          <Product key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const products = await client.getEntries({
    content_type: "product",
    order: "-sys.createdAt",
    limit: 10,
  });

  return {
    props: { products: products.items },
  };
};
