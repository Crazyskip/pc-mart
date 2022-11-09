import type { GetServerSideProps, NextPage } from "next";
import client from "../../lib/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, Node } from "@contentful/rich-text-types";
import React from "react";
import { TypeProduct } from "../../common/content-types";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/slices/cartSlice";

interface PageProps {
  product: TypeProduct;
}

const Product: NextPage<PageProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  if (product === null) {
    return <div>Product Not Found</div>;
  }

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const { file, title } = node.data.target.fields;
        return (
          <Image
            src={`https:${file.url}`}
            style={{ width: "100%", height: "auto" }}
            height={file.details.image.height}
            width={file.details.image.width}
            alt={title}
            priority
          />
        );
      },
    },
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <h1>{product.fields.name}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Image
            src={`https:${product.fields.images[0].fields.file.url}`}
            height="225"
            width="225"
            alt="thumbnail"
          />
          <Image
            src={`https:${product.fields.images[1].fields.file.url}`}
            height="225"
            width="225"
            alt="thumbnail"
          />
        </div>
        <h1>${product.fields.price}</h1>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                ...product.fields,
              })
            )
          }
        >
          Add to Cart
        </button>
      </div>
      <div style={{ maxWidth: "calc(100% - 500px)" }}>
        <h2>Overview</h2>
        <hr />
        {product.fields.description}
        {product.fields.overview.content.map((section, index) => {
          return (
            <React.Fragment key={`overview-${index}`}>
              {documentToReactComponents(section as Document, options)}
            </React.Fragment>
          );
        })}

        {product.fields.specifications.content.map((section, index) => {
          return (
            <React.Fragment key={`specification-${index}`}>
              {documentToReactComponents(section as Document)}
            </React.Fragment>
          );
        })}

        <h2>Warranty</h2>
        <hr />
        {product.fields.warranty.content.map((section, index) => {
          return (
            <React.Fragment key={`warranty-${index}`}>
              {documentToReactComponents(section as Document)}
            </React.Fragment>
          );
        })}
      </div>
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
