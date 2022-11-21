import Image from "next/image";
import Link from "next/link";
import { TypeHomeProduct } from "../../common/content-types";
import {
  Details,
  FeaturedContainer,
  ProductContainer,
  SubTitle,
  Title,
} from "./Featured.styles";

interface Props {
  products: TypeHomeProduct[];
}

const Featured = ({ products }: Props) => {
  return (
    <FeaturedContainer>
      {products.map((product) => (
        <ProductContainer key={product.sys.id}>
          <Link href={`/products/${product.fields.product.fields.slug}`}>
            <Image
              src={`https:${product.fields.product.fields.images[0].fields.file.url}`}
              height="250"
              width="250"
              style={{ width: "100%", height: "auto" }}
              alt={product.fields.product.fields.images[0].fields.title}
              quality="100"
            />
            <Details>
              <Title>{product.fields.title}</Title>
              <SubTitle>{product.fields.subTitle}</SubTitle>
            </Details>
          </Link>
        </ProductContainer>
      ))}
    </FeaturedContainer>
  );
};

export default Featured;
