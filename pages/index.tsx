import Head from "next/head";
import Product from "components/product";
import Products from "data/products";
import Cart from "components/cart";
import MobileOffers from "data/mobile-offers";
import MobileOffer from "components/mobile-offer";

import { useAppSelector } from "app/hooks";
import { CartHasItems } from "app/features/featCart";

export default function Home() {
  const cartHasItems = useAppSelector(CartHasItems);
  return (
    <div>
      <Head>
        <title>Learn Datatrans</title>
        <meta name="description" content="learn datatrans payment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1>Shop </h1>
        <div className="grid grid-flow-col grid-cols-3 justify-items-center">
          {/*  {Products.map((P, key) => (
            <Product
              key={"product-" + key}
              price={P.price}
              image={P.image}
              name={P.name}
            />
          ))} */}
          {MobileOffers.map((M) => (
            <MobileOffer {...M} />
          ))}
        </div>
      </main>
      {cartHasItems && <Cart />}
    </div>
  );
}
