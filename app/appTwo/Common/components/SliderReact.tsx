import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function SliderReact() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <main className="max-w-2xl mx-auto my-20">
      <Slider {...settings}>
        <div className="px-2  animate__animated animate__fadeInLeft">
          <div className="bg-blue-400 text-center p-5">
            <Image
              className="object-cover w-full mb-5"
              src="/img/blog/blog-1.png"
              width={300}
              height={300}
              alt="slide"
            />

            <h2>Slider react</h2>
            <p>Slider reactSlider reactSlider reactSlider reactSlider react</p>
          </div>
        </div>
        <div className="px-2 animate__animated animate__fadeInRight">
          <div className="bg-blue-400 text-center p-5">
            <Image
              className="object-cover w-full mb-5"
              src="/img/blog/blog-1.png"
              width={300}
              height={300}
              alt="slide"
            />

            <h2>Slider react</h2>
            <p>Slider reactSlider reactSlider reactSlider reactSlider react</p>
          </div>
        </div>
        <div className="px-2">
          <div className="bg-blue-400 text-center p-5">
            <Image
              className="object-cover w-full mb-5"
              src="/img/blog/blog-1.png"
              width={300}
              height={300}
              alt="slide"
            />

            <h2>Slider react</h2>
            <p>Slider reactSlider reactSlider reactSlider reactSlider react</p>
          </div>
        </div>
        <div className="px-2">
          <div className="bg-blue-400 text-center p-5">
            <Image
              className="object-cover w-full mb-5"
              src="/img/blog/blog-1.png"
              width={300}
              height={300}
              alt="slide"
            />

            <h2>Slider react</h2>
            <p>Slider reactSlider reactSlider reactSlider reactSlider react</p>
          </div>
        </div>
      </Slider>
    </main>
  );
}
