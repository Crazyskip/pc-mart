import { Prisma } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { CategoryWithSubCategoriesAndProducts } from "../../../common/types";
import prisma from "../../../lib/prismadb";

const Category: NextPage<{
  category: CategoryWithSubCategoriesAndProducts | null;
}> = ({ category }) => {
  if (category === null) {
    return <div>Category Not Found</div>;
  }

  const images = category.subcategories[0].products[0]
    .images as Prisma.JsonArray;

  return (
    <div>
      <h1>{category.name}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {category.subcategories.map((subCategory) => (
          <Link
            href={`/category/${category.slug}/${category.subcategories[0].slug}`}
            key={subCategory.id}
          >
            <a
              style={{
                display: "block",
                border: "1px solid white",
                margin: "10px",
                width: "256px",
              }}
            >
              <Image
                src={images[0] as string}
                height="256"
                width="256"
                alt="thumbnail"
              />
              <h3 style={{ textAlign: "center" }}>
                {category.subcategories[0].name}
              </h3>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const categorySlug = String(params?.slug);

  const category = await prisma.category.findUnique({
    where: { slug: categorySlug },
    include: {
      subcategories: {
        include: {
          products: true,
        },
      },
    },
  });

  return {
    props: { category },
  };
};
