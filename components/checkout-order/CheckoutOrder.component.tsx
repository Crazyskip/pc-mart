import Image from "next/image";
import Link from "next/link";
import { Product } from "../../common/content-types";
import {
  BottomPanel,
  Details,
  FunctionButton,
  Order,
  OrderContainer,
  OrderProduct,
  TopPanel,
} from "./CheckoutOrder.styles";

interface Props {
  cart: Product[];
}

const CheckoutOrder = ({ cart }: Props) => {
  const total = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  const GST = total / 11;

  const postage = 15;

  return (
    <OrderContainer>
      <TopPanel>
        <span>Your Order</span>
        <Link href="/cart" legacyBehavior passHref>
          <FunctionButton>Edit Order</FunctionButton>
        </Link>
      </TopPanel>
      <Order>
        {cart.map((item) => (
          <OrderProduct key={item.slug}>
            <Image
              src={`https:${item.images[0].fields.file.url}`}
              alt={item.images[0].fields.title}
              height="65"
              width="65"
            />
            <div>
              {item.quantity} x {item.name}
            </div>
            <span>${item.quantity * item.price}</span>
          </OrderProduct>
        ))}
        <Details>
          <tr>
            <th>Sub-Total:</th>
            <td>${total.toFixed(2)}</td>
          </tr>
          <tr>
            <th>eParcel Express</th>
            <td>${postage.toFixed(2)}</td>
          </tr>
          <tr>
            <th>GST Included:</th>
            <td>${GST.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Total:</th>
            <td>${(total + postage).toFixed(2)}</td>
          </tr>
        </Details>
      </Order>
      <BottomPanel>
        <input type="checkbox" /> I have read and agree to the terms and
        conditions
      </BottomPanel>
    </OrderContainer>
  );
};

export default CheckoutOrder;
