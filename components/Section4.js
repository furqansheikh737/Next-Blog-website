import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
const Section4 = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item m-4">
          <h1 className="text-4xl font-bold py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="item m-4">
        <h1 className="text-4xl font-bold py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
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
            width={300}
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

export default Section4;
