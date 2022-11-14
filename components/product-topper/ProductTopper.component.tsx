import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TypeProductFields } from "../../common/content-types";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/slices/cartSlice";
import {
  AddToCart,
  ImageSlider,
  Model,
  Price,
  PriceBox,
  StockLabel,
  Title,
} from "./ProductTopper.styles";

interface Props {
  product: TypeProductFields;
}

const ProductTopper = ({ product }: Props) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const dispatch = useAppDispatch();
  return (
    <>
      <Title>{product.name}</Title>
      <Model>
        {product.modelNumber} |{" "}
        <Link href={`/`}>{product.brand.fields.name}</Link>
      </Model>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ImageSlider>
          <Image
            src={`https:${product.images[selectedImage].fields.file.url}`}
            alt={product.images[0].fields.title}
            height="300"
            width="300"
            priority
          />
          {product.images.map((image, index) => (
            <div key={image.sys.id} onClick={() => setSelectedImage(index)}>
              <Image
                src={`https:${image.fields.file.url}`}
                alt={image.fields.title}
                height="84"
                width="84"
              />
            </div>
          ))}
        </ImageSlider>
        <PriceBox>
          <Price>${product.price}</Price>
          <AddToCart onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </AddToCart>
          <StockLabel>In Stock</StockLabel>
        </PriceBox>
      </div>
    </>
  );
};

export default ProductTopper;
