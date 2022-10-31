import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  TypeCategoryFields,
  TypeProduct,
  TypeSubCategory,
  TypeSubCategoryFields,
} from "../../../common/content-types";
import client from "../../../lib/contentful";

interface TypeSubCategoryWithProductsFields extends TypeSubCategoryFields {
  products: TypeProduct[];
}

interface TypeSubCategoryWithProducts extends TypeSubCategory {
  fields: TypeSubCategoryWithProductsFields;
}

const Category: NextPage<{
  category: TypeCategoryFields;
  subCategories: TypeSubCategoryWithProducts[];
}> = ({ category, subCategories }) => {
  if (category === null) {
    return <div>Category Not Found</div>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <hr />
      {subCategories.map(({ fields: subCategory }) => (
        <div
          key={subCategory.slug}
          style={{
            border: "1px solid white",
            margin: "5px",
            width: "227px",
          }}
        >
          <Link href={`/category/${category.slug}/${subCategory.slug}`}>
            <a>
              <Image
                src={`https:${subCategory.products[0].fields.images[0].fields.file.url}`}
                height="225"
                width="225"
                alt={subCategory.products[0].fields.images[0].fields.title}
              />
            </a>
          </Link>
          <Link href={`/category/${category.slug}/${subCategory.slug}`}>
            <a style={{ display: "block", padding: "10px" }}>
              <h3>{subCategory.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const categorySlug = String(params?.slug);

  const categories = await client.getEntries({
    content_type: "category",
    "fields.slug[match]": categorySlug,
    limit: 1,
  });

  const category = categories.items[0] || null;

  const subCategories = await client.getEntries({
    content_type: "subCategory",
    "fields.category.sys.contentType.sys.id": "category",
    "fields.category.fields.slug[match]": categorySlug,
  });

  const getProducts = (subCategorySlug: string) => {
    return client.getEntries({
      content_type: "product",
      "fields.subCategory.sys.contentType.sys.id": "subCategory",
      "fields.subCategory.fields.slug[match]": subCategorySlug,
    });
  };

  const productPromises = subCategories.items.map((subCategory: any) =>
    getProducts(subCategory.fields.slug)
  );

  const productsArray = await Promise.all(productPromises);

  // add products items to sub category fields
  subCategories.items = subCategories.items.map((subCategory: any, index) => {
    return {
      ...subCategory,
      fields: { ...subCategory.fields, products: productsArray[index].items },
    };
  });

  return {
    props: { category: category?.fields, subCategories: subCategories.items },
  };
};
