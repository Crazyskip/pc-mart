import {
  faXmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  CloseButton,
  ImageContainer,
  ImageModalContainer,
  LeftArrow,
  RightArrow,
  ModalBackground,
} from "./ImageModal.styles";
import * as Contentful from "contentful";

interface CloseModalFunc {
  (): void;
}

interface ChangeImageFunc {
  (mode: "increase" | "decrease"): void;
}

interface Props {
  image: Contentful.Asset;
  closeModal: CloseModalFunc;
  handleDisplayImageChange: ChangeImageFunc;
}

const ImageModal = ({ image, closeModal, handleDisplayImageChange }: Props) => (
  <ImageModalContainer>
    <ImageContainer>
      <Image
        src={`https:${image.fields.file.url}`}
        height={image.fields.file.details.image?.height}
        width={image.fields.file.details.image?.width}
        alt="product"
        quality={100}
      />
    </ImageContainer>
    <ModalBackground onClick={closeModal} />

    <LeftArrow onClick={() => handleDisplayImageChange("decrease")}>
      <FontAwesomeIcon icon={faArrowLeft} fixedWidth size="2xl" />
    </LeftArrow>

    <RightArrow onClick={() => handleDisplayImageChange("increase")}>
      <FontAwesomeIcon icon={faArrowRight} fixedWidth size="2xl" />
    </RightArrow>

    <CloseButton onClick={closeModal}>
      <FontAwesomeIcon icon={faXmark} fixedWidth size="2xl" />
    </CloseButton>
  </ImageModalContainer>
);

export default ImageModal;
