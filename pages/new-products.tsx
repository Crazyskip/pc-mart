import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { TypeProduct, TypeSubCategoryFields } from "../common/content-types";
import client from "../lib/contentful";

const NewProducts: NextPage<{
  products: TypeProduct[];
}> = ({ products }) => {
  return (
    <div>
      <h1>New Products</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(({ fields: product }) => (
          <div
            key={product.slug}
            style={{ border: "1px solid white", margin: "5px", width: "227px" }}
          >
            <Link href={`/products/${product.slug}`}>
              <Image
                src={`https:${product.images[0].fields.file.url}`}
                height="225"
                width="225"
                alt={product.images[0].fields.title}
              />
            </Link>
            <div style={{ display: "block", padding: "0 10px" }}>
              <Link href={`/products/${product.slug}`}>
                <h3>{product.name}</h3>
              </Link>
              <h4>${product.price}</h4>
            </div>
          </div>
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
