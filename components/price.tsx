import type { FC } from "react";
import Decimal from "decimal.js";

interface Props {
  amount: number;
}
const Price: FC<Props> = ({ amount }) => {
  const price = new Decimal(amount / 100);
  return <span>{price.toFixed(2)}&nbsp;CHF</span>;
};

export default Price;
