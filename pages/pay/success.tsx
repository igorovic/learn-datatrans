import Link from "next/link";
export default function PaySuccess() {
  return (
    <div className="container pt-8">
      <Link href="/" passHref>
        <a className="link link-hover">Retour au shop</a>
      </Link>
      <h1 className="mt-10">Payment success</h1>
    </div>
  );
}
