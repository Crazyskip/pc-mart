import Image from "next/image";
import Link from "next/link";
import { TypeProductFields } from "../../common/content-types";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/slices/cartSlice";
import {
  ProductContainer,
  ProductDescription,
  PriceBox,
  Price,
  AddToCart,
  StockLabel,
} from "./Product.styles";

interface Props {
  product: TypeProductFields;
}

const Product = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <ProductContainer>
      <Link href={`/products/${product.slug}`}>
        <Image
          src={`https:${product.images[0].fields.file.url}`}
          height="150"
          width="150"
          alt={product.images[0].fields.title}
        />
      </Link>
      <ProductDescription>
        <div>
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </div>
        <p>{product.description}</p>
      </ProductDescription>
      <PriceBox>
        <Price>${product.price}</Price>
        <AddToCart onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </AddToCart>
        <StockLabel>In Stock</StockLabel>
      </PriceBox>
    </ProductContainer>
  );
};

export default Product;
