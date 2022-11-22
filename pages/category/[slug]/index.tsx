import type { GetServerSideProps, NextPage } from "next";
import styled from "styled-components";
import {
  TypeCategoryFields,
  TypeSubCategoryWithProducts,
} from "../../../common/content-types";
import SubCategory from "../../../components/sub-category/SubCategory.component";
import client from "../../../lib/contentful";

interface PageProps {
  category: TypeCategoryFields;
  subCategories: TypeSubCategoryWithProducts[];
}

const SubCategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Category: NextPage<PageProps> = ({ category, subCategories }) => {
  if (category === null) {
    return <div>Category Not Found</div>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <hr />
      <SubCategoriesContainer>
        {subCategories.map(({ fields: subCategory }) => (
          <SubCategory key={subCategory.slug} subCategory={subCategory} />
        ))}
      </SubCategoriesContainer>
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
