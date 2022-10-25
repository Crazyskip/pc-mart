import { Prisma } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { SubCategoryWithProducts } from "../../../common/types";
import prisma from "../../../lib/prismadb";

const SubCategory: NextPage<{
  subCategory: SubCategoryWithProducts | null;
}> = ({ subCategory }) => {
  if (subCategory === null) {
    return <div>Category Not Found</div>;
  }

  return (
    <div>
      <h1>{subCategory.name}</h1>
      {subCategory.products.map((product) => {
        const images = product.images as string[];
        return (
          <div
            key={product.id}
            style={{ border: "1px solid white", display: "flex" }}
          >
            <Image src={images[0]} height="225" width="225" alt="thumbnail" />
            <div style={{ width: "calc(100% - 266px)", margin: "0 20px" }}>
              <h3>{product.name}</h3>
              <p>{product.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubCategory;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const subCategorySlug = String(params?.subSlug);

  const subCategory = await prisma.subCategory.findUnique({
    where: { slug: subCategorySlug },
    include: {
      products: true,
    },
  });

  return {
    props: { subCategory },
  };
};
