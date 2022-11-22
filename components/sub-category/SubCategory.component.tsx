import Image from "next/image";
import Link from "next/link";
import { TypeSubCategoryWithProductsFields } from "../../common/content-types";
import { SubCategoryContainer, Title } from "./SubCategory.styles";

interface Props {
  subCategory: TypeSubCategoryWithProductsFields;
}

const SubCategory = ({ subCategory }: Props) => {
  return (
    <SubCategoryContainer key={subCategory.slug}>
      <Link
        href={`/category/${subCategory.category.fields.slug}/${subCategory.slug}`}
      >
        <Image
          src={`https:${subCategory.products[0].fields.images[0].fields.file.url}`}
          height="225"
          width="225"
          style={{ width: "100%", height: "auto" }}
          alt={subCategory.products[0].fields.images[0].fields.title}
        />
      </Link>
      <Link
        href={`/category/${subCategory.category.fields.slug}/${subCategory.slug}`}
        legacyBehavior
      >
        <Title>{subCategory.name}</Title>
      </Link>
    </SubCategoryContainer>
  );
};

export default SubCategory;
