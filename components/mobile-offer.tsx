import type { FC } from "react";
import Decimal from "decimal.js";
interface Props {
  title: string;
  details: string[];
  price: number;
}
const MobileOffer: FC<Props> = (props) => {
  const { title, details, price } = props;
  const chf = new Decimal(price / 100);

  return (
    <div
      className="flex flex-col border-2 cursor-pointer border-yellow-500 bulle bg-gray-800"
      style={{ maxWidth: "80%" }}
    >
      <div className="text-center pb-4 px-4 mt-4">
        <strong>{title}</strong>
      </div>
      <div className="px-4">
        {details.map((d) => (
          <>
            <span>{d}</span>
            <br />
          </>
        ))}
      </div>
      <div className="pt-6 pb-2 px-4 text-center">
        {chf.toFixed(2)}&nbsp; CHF
      </div>
    </div>
  );
};

export default MobileOffer;
