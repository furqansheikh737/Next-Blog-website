import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
const Related = () => {
  return (
    <section className="pt-20">
      <h1 className="text-3xl font-bold py-10">Related</h1>
      <div className="flex flex-col gap-10">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
};

function Post() {
  return (
    <div className="flex gap-5">
      <div className="images flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={"/Images/img05.jpg"}
            className="rounded"
            width={250}
            height={250}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-700">
            Business Travel
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            -July 4,2023
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-base font-bold text-gray-800 hover:text-gray-700"
          >
            You most unhappy costumers are your greatest source of learning
          </Link>
          <Author />
        </div>
      </div>
    </div>
  );
}

export default Related;
