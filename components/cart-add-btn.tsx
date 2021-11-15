import type { FC } from "react";

interface Props {
  addHandler: () => void;
}
const CartAddBtn: FC<Props> = ({ addHandler }) => {
  return (
    <div className="btn btn-primary" onClick={addHandler}>
      Ajouter au panier
    </div>
  );
};

export default CartAddBtn;
