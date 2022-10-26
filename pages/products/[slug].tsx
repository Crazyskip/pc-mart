import { Prisma, Product } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { Specification } from "../../common/types";
import prisma from "../../lib/prismadb";

const Product: NextPage<{
  product: Product | null;
}> = ({ product }) => {
  if (product === null) {
    return <div>Product Not Found</div>;
  }

  const images = product.images as string[];

  // Convert JsonValue to Specification Array
  const specificationsArray = product.specifications as Prisma.JsonArray;
  const specs = specificationsArray.map((spec) => spec as unknown);
  const specifications = specs.map((spec) => spec as Specification);

  return (
    <div style={{ margin: "0 10px" }}>
      <h1>{product.name}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image src={images[0]} height="225" width="225" alt="thumbnail" />
        <h1>${product.price}</h1>
      </div>

      <h2>Overview</h2>
      <hr />
      <p>{product.overview}</p>
      <hr />
      <h2>Specifications</h2>
      <hr />
      <div>
        {specifications.map((spec) => (
          <div key={spec.title}>
            <h2>{spec.title}</h2>
            {spec.specs.map((specValue, specIndex) => (
              <div
                key={specValue.spec}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 0",
                  backgroundColor: specIndex % 2 === 0 ? "#3b3b3b" : "#292929",
                }}
              >
                <span style={{ width: "50%" }}>{specValue.spec}</span>
                <span style={{ width: "50%", padding: "0 20px" }}>
                  {specValue.values.map((val, index) => (
                    <div key={val + index}>{val}</div>
                  ))}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <hr />
      <h2>Warranty & Returns</h2>
      <hr />
      {product.warranty}
    </div>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const productSlug = String(params?.slug);

  const product = await prisma.product.findUnique({
    where: { slug: productSlug },
  });

  return {
    props: { product },
  };
};
