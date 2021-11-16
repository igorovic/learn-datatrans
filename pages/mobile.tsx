import Head from "next/head";
import Cart from "components/cart";
import MobileOffers from "data/mobile-offers";
import MobileOffer from "components/mobile-offer";

import { useAppSelector } from "app/hooks";
import { CartHasItems } from "app/features/featCart";

export default function Mobile() {
  const cartHasItems = useAppSelector(CartHasItems);
  return (
    <div>
      <Head>
        <title>Learn Datatrans</title>
        <meta name="description" content="learn datatrans payment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1>Mobile </h1>
        <div className="grid grid-flow-col grid-cols-3 justify-items-center">
          {MobileOffers.map((M) => (
            <MobileOffer {...M} />
          ))}
        </div>
      </main>
      {cartHasItems && <Cart />}
    </div>
  );
}
