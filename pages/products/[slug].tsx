import type { GetServerSideProps, NextPage } from "next";
import client from "../../lib/contentful";
import React from "react";
import { TypeProduct } from "../../common/content-types";
import ProductTopper from "../../components/product-topper/ProductTopper.component";
import ProductTabs from "../../components/product-tabs/ProductTabs.component";

interface PageProps {
  product: TypeProduct;
}

const Product: NextPage<PageProps> = ({ product }) => {
  if (product === null) {
    return <div>Product Not Found</div>;
  }

  return (
    <div style={{ margin: "0 auto" }}>
      <ProductTopper product={product.fields} />
      <ProductTabs
        description={product.fields.description}
        overview={product.fields.overview}
        specifications={product.fields.specifications}
        warranty={product.fields.warranty}
      />
    </div>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const productSlug = String(params?.slug);

  const products = await client.getEntries({
    content_type: "product",
    "fields.slug[match]": productSlug,
    limit: 1,
  });

  return {
    props: { product: products.items[0] || null },
  };
};
