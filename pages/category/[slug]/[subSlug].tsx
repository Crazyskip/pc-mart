import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  TypeProduct,
  TypeSubCategoryFields,
} from "../../../common/content-types";
import client from "../../../lib/contentful";

const SubCategory: NextPage<{
  subCategory: TypeSubCategoryFields;
  products: TypeProduct[];
}> = ({ subCategory, products }) => {
  if (subCategory === null) {
    return <div>Category Not Found</div>;
  }

  console.log(subCategory);
  console.log(products);

  return (
    <div>
      <h1>{subCategory.name}</h1>
      <hr />
      <div style={{ display: "flex" }}>
        {products.map(({ fields: product }) => (
          <div
            key={product.slug}
            style={{ border: "1px solid white", margin: "5px", width: "227px" }}
          >
            <Link href={`/products/${product.slug}`}>
              <a>
                <Image
                  src={`https:${product.images[0].fields.file.url}`}
                  height="225"
                  width="225"
                  alt={product.images[0].fields.title}
                />
              </a>
            </Link>
            <Link href={`/products/${product.slug}`}>
              <a>
                <h3>{product.name}</h3>
              </a>
            </Link>
            <h4>${product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const subCategorySlug = String(params?.subSlug);

  const subCategories = await client.getEntries({
    content_type: "subCategory",
    "fields.slug[match]": subCategorySlug,
    limit: 1,
  });

  const subCategory = subCategories.items[0] || null;

  const products = await client.getEntries({
    content_type: "product",
    "fields.subCategory.sys.contentType.sys.id": "subCategory",
    "fields.subCategory.fields.slug[match]": subCategorySlug,
  });

  return {
    props: { subCategory: subCategory?.fields, products: products.items },
  };
};
