import type { FC } from "react";
import Image from "next/image";
import Price from "./price";
import CartAddBtn from "./cart-add-btn";

import { useAppDispatch } from "app/hooks";
import { add_item } from "app/features/featCart";

interface Props {
  price: number;
  name: string;
  image: string;
}

const Product: FC<Props> = ({ price, name, image }) => {
  const dispatch = useAppDispatch();
  const addHandler = () => {
    dispatch(add_item({ price, name, quantity: 1 }));
  };
  return (
    <div className="card">
      <div className="p-4">
        <Image
          className="rounded-md"
          src={image}
          layout="responsive"
          objectFit="cover"
          width={400}
          height={400}
        />
      </div>
      <div className="p-4 card-body">
        <span>{name}</span>
        <br />
        <Price amount={price} />
      </div>
      <div className="p-4 card-actions">
        <CartAddBtn addHandler={addHandler} />
      </div>
    </div>
  );
};

export default Product;
