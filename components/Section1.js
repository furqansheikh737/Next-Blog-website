import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
export default function Section1() {
  return (
    <section>
      <div className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl pb-8 text-center">Trending</h1>
        <Swiper
          slidesPerView={1}
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="mx-6 grid md:grid-cols-2 gap-14">
      <div className="image">
        <Link href={"/posts/page"}>
          <Image src={"/Images/img05.jpg"} width={500} height={400} />
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
            className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-700"
          >
            You most unhappy costumers are your greatest source of learning
          </Link>
        </div>
        <p className="text-gray-500 py-2">
          Even the all-powerful pointing has no control about the text by the
          name of lorem ipsum decided to leave for. Even the all-powerful
          pointing has no control about the text by the name of lorem ipsum
          decided to leave for.
        </p>
        <Author />
      </div>
    </div>
  );
}
