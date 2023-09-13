import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import { Swiper, SwiperSlide } from "swiper/react";

const Section3 = () => {
  return (
    <section className="container mx-auto md:py-7 px-20">
      <h1 className="text-4xl font-bold text-center py-10">Most Popular</h1>
      
        <Swiper slidesPerView={2}>
          <SwiperSlide>{Post()}</SwiperSlide>
          <SwiperSlide>{Post()}</SwiperSlide>
          <SwiperSlide>{Post()}</SwiperSlide>
          <SwiperSlide>{Post()}</SwiperSlide>
        </Swiper>
    </section>
  );
};

function Post() {
  return (
    <div className="grid">
      <div className="images">
        <Link href={"/"}>
          <Image src={"/Images/img05.jpg"} width={500} height={400} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-700">
            Business Travel
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            -July 4,2023
          </Link>
        </div>
        <div className="title mr-6">
          <Link
            href={"/"}
            className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-700"
          >
            You most unhappy costumers are your greatest source of learning
          </Link>
          <p className="text-gray-500 py-2 mr-6">
            Even the all-powerful pointing has no control about the text by the
            name of lorem ipsum decided to leave for. Even the all-powerful
            pointing has no control about the text by the name of lorem ipsum
            decided to leave for.
          </p>
          <Author />
        </div>
      </div>
    </div>
  );
}

export default Section3;
