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
        <p>
          The AMD Ryzen 9 7900X Processor is a 12-core workhorse designed for
          enthusiast level gamers and content creators. Be prepared to overpower
          the competition with a base clock speed of 4.7GHz and boost clock up
          to a blazing 5.6GHz, and 64MB of L3 Cache. Outfit your rig wit…
        </p>
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
