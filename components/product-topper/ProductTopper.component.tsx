import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TypeProductFields } from "../../common/content-types";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/slices/cartSlice";
import ImageModal from "../image-modal/ImageModal.component";
import {
  AddToCart,
  Container,
  ImageSelector,
  ImageSlider,
  Model,
  Price,
  PriceBox,
  SelectImage,
  StockLabel,
  Thumbnail,
  Title,
} from "./ProductTopper.styles";

interface Props {
  product: TypeProductFields;
}

const ProductTopper = ({ product }: Props) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedModalImage, setSelectedModalImage] = useState<number | null>(
    null
  );

  const dispatch = useAppDispatch();

  const closeModal = () => {
    setSelectedModalImage(null);
  };

  const handleDisplayImageChange = (mode: "increase" | "decrease") => {
    if (selectedModalImage === null) return;
    if (mode === "increase") {
      if (selectedModalImage === product.images.length - 1) {
        setSelectedModalImage(0);
      } else {
        setSelectedModalImage(selectedModalImage + 1);
      }
    } else if (mode === "decrease") {
      if (selectedModalImage === 0) {
        setSelectedModalImage(product.images.length - 1);
      } else {
        setSelectedModalImage(selectedModalImage - 1);
      }
    }
  };

  return (
    <>
      <Title>{product.name}</Title>
      <Model>
        {product.modelNumber} |{" "}
        <Link href={`/`}>{product.brand.fields.name}</Link>
      </Model>
      <Container>
        <ImageSlider>
          <Thumbnail onClick={() => setSelectedModalImage(selectedImage)}>
            <Image
              src={`https:${product.images[selectedImage].fields.file.url}`}
              alt={product.images[0].fields.title}
              height="300"
              width="300"
              priority
            />
          </Thumbnail>
          <ImageSelector count={product.images.length}>
            {product.images.map((image, index) => (
              <SelectImage
                key={image.sys.id}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={`https:${image.fields.file.url}`}
                  alt={image.fields.title}
                  height="84"
                  width="84"
                />
              </SelectImage>
            ))}
          </ImageSelector>
        </ImageSlider>
        <PriceBox>
          <Price>${product.price}</Price>
          <AddToCart onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </AddToCart>
          <StockLabel>In Stock</StockLabel>
        </PriceBox>
      </Container>
      {selectedModalImage !== null ? (
        <ImageModal
          image={product.images[selectedModalImage]}
          closeModal={closeModal}
          handleDisplayImageChange={handleDisplayImageChange}
        />
      ) : null}
    </>
  );
};

export default ProductTopper;
