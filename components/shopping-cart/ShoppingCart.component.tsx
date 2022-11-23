import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "../../common/content-types";
import { useAppDispatch } from "../../store/hooks";
import { removeFromCart, setQuantity } from "../../store/slices/cartSlice";
import {
  CartTable,
  ClearCell,
  PriceCell,
  ProductCell,
  QuantityInput,
  StockCell,
  TableCell,
  TableHeader,
} from "./ShoppingCart.styles";

interface Props {
  cart: Product[];
}

const ShoppingCart = ({ cart }: Props) => {
  const dispatch = useAppDispatch();
  const [quantities, setQuantities] = useState<string[]>(
    cart.map((product) => String(product.quantity))
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number,
    slug: string
  ): void => {
    const value = e.target.value;
    const numberValue = Number(value);

    const newQuantities = [...quantities];

    if (value === "") {
      newQuantities[i] = value;
    } else if (isNaN(numberValue)) {
      alert("Please give only numeric values.");
      newQuantities[i] = "1";
      dispatch(setQuantity({ slug, quantity: 1 }));
    } else if (numberValue < 1) {
      alert("Please give values greater then zero.");
      newQuantities[i] = "1";
      dispatch(setQuantity({ slug, quantity: 1 }));
    } else {
      newQuantities[i] = value;
      dispatch(setQuantity({ slug, quantity: numberValue }));
    }
    setQuantities(newQuantities);
  };

  return (
    <CartTable>
      <thead>
        <tr>
          <TableHeader align="left" w="50%">
            Product
          </TableHeader>
          <TableHeader align="left" w="10%">
            Availability
          </TableHeader>
          <TableHeader w="15%">Price</TableHeader>
          <TableHeader w="10%">Qty</TableHeader>
          <TableHeader w="10%">Total</TableHeader>
          <TableHeader w="5%"></TableHeader>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, index) => (
          <tr key={item.slug}>
            <ProductCell>
              <Link href={`/products/${item.slug}`}>
                <Image
                  src={`https:${item.images[0].fields.file.url}`}
                  alt={item.images[0].fields.title}
                  height="80"
                  width="80"
                />
              </Link>
              <Link href={`/products/${item.slug}`}>{item.name}</Link>
            </ProductCell>
            <StockCell align="left">In Stock</StockCell>
            <PriceCell>${item.price}</PriceCell>
            <TableCell>
              <QuantityInput
                type="text"
                value={quantities[index]}
                onChange={(e) => handleChange(e, index, item.slug)}
              />
            </TableCell>
            <PriceCell>${item.quantity * item.price}</PriceCell>
            <ClearCell>
              <FontAwesomeIcon
                onClick={() => dispatch(removeFromCart({ slug: item.slug }))}
                icon={faXmark}
                size="lg"
              />
            </ClearCell>
          </tr>
        ))}
      </tbody>
    </CartTable>
  );
};

export default ShoppingCart;
