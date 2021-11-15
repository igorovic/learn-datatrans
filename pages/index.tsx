import Head from "next/head";
import Product from "components/product";
import Products from "data/products";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learn Datatrans</title>
        <meta name="description" content="learn datatrans payment" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://pay.sandbox.datatrans.com/upp/payment/js/datatrans-2.0.0.js"></script>
      </Head>

      <main className="container">
        <h1>Shop </h1>
        <div className="grid grid-flow-col grid-cols-3">
          {Products.map((P, key) => (
            <Product
              key={"product-" + key}
              price={P.price}
              image={P.image}
              name={P.name}
            />
          ))}
        </div>
      </main>
      <div className="cart">
        <div className="rounded-lg shadow bg-base-200 drawer drawer-end h-52">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="flex flex-col items-center justify-center drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="btn btn-primary drawer-button"
            >
              Panier
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <li>
                <a>Menu Item</a>
              </li>
              <li>
                <a>Menu Item</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
