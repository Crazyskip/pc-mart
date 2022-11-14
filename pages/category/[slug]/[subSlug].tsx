import type { GetServerSideProps, NextPage } from "next";
import {
  TypeProduct,
  TypeSubCategoryFields,
} from "../../../common/content-types";
import Product from "../../../components/product/Product.component";
import client from "../../../lib/contentful";

interface PageProps {
  subCategory: TypeSubCategoryFields;
  products: TypeProduct[];
}

const SubCategory: NextPage<PageProps> = ({ subCategory, products }) => {
  if (subCategory === null) {
    return <div>Category Not Found</div>;
  }

  return (
    <div>
      <h1>{subCategory.name}</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(({ fields: product }) => (
          <Product key={product.slug} product={product} />
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
    limit: 30,
    select:
      "fields.name,fields.slug,fields.brand,fields.price,fields.images,fields.description",
  });

  return {
    props: { subCategory: subCategory?.fields, products: products.items },
  };
};
