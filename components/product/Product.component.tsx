import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const [disabled, setDisabled] = useState(false);

  const addItem = () => {
    setDisabled(true);
    dispatch(addToCart(product));
    setTimeout(() => {
      setDisabled(false);
    }, 750);
  };

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
        {disabled ? (
          <AddToCart disabled={true}>
            <FontAwesomeIcon icon={faCheck} />
            Item Added
          </AddToCart>
        ) : (
          <AddToCart onClick={addItem}>Add to Cart</AddToCart>
        )}
        <StockLabel>In Stock</StockLabel>
      </PriceBox>
    </ProductContainer>
  );
};

export default Product;
