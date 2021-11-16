import type { FC } from "react";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { selectCartTotal, cartItems, remove_item } from "app/features/featCart";
import { Icon } from "@blueprintjs/core";
import Decimal from "decimal.js";

import axios from "axios";
import LightBox from "./datatrans-lightbox";

const Cart: FC<any> = () => {
  const [transactionId, setTransactionId] = useState("");
  const [lightbox, showLightbox] = useState(false);
  const dispatch = useAppDispatch();
  const total = useAppSelector(selectCartTotal);
  const totalDisplay = new Decimal(total / 100);
  const items = useAppSelector(cartItems);

  const removeItem = (name: string) => {
    dispatch(remove_item(name));
  };

  const initTransaction = async () => {
    const R = await axios.post("/api/pay/init", {
      currency: "CHF",
      refno: "dreg-" + Date.now(),
      autoSettle: false,
      option: {
        //rememberMe: true,
        createAlias: true,
      },
      customer: {
        id: 1,
        title: "Ms",
        firstName: "Igor",
        lastName: "Petrovic",
      },
      amount: total,
      redirect: {
        successUrl: "https://localhost/pay/success",
        cancelUrl: "https://localhost/pay/cancel",
        errorUrl: "https://localhost/pay/error",
      },
    });

    if (R.data?.transactionId) {
      setTransactionId(R.data.transactionId);
      showLightbox(true);
    }
  };

  const onLoaded = () => console.log("Loaded");
  const onOpened = () => console.log("Opened");
  const onCancelled = () => showLightbox(false);

  return (
    <div className="cart flex flex-col">
      <h2 className="border-b mb-4">Panier</h2>
      {items.map((item, idx) => (
        <div className="py-2 px-4 rounded hover:bg-gray-400 hover:text-gray-800 flex flex-row">
          {item.quantity}&nbsp;x&nbsp;{item.name}
          <div className="flex-grow flex-shrink-0"></div>
          <Icon
            icon="trash"
            color="white"
            className="cursor-pointer"
            onClick={() => removeItem(item.name)}
          />
        </div>
      ))}
      <div className="flex flex-shrink-0 flex-grow"></div>
      <div className="divider"></div>
      <h2>Total: {totalDisplay.toFixed(2)}&nbsp; CHF</h2>
      <div className="btn btn-primary mt-6" onClick={initTransaction}>
        payer
      </div>
      {lightbox ? (
        <LightBox
          transactionId={transactionId}
          onLoaded={onLoaded}
          onCancelled={onCancelled}
          onOpened={onOpened}
        />
      ) : null}
    </div>
  );
};

export default Cart;
