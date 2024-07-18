import React from "react";
import { foodSlider } from "../Data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function FoodsLider({handleAdd}) {


  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto  ">
      <h2 className="text-center font-bold text-3xl">What's on your mind?</h2>
      <div className="py-20">
        <Slider {...settings}>
          {foodSlider.map((item) => (
            <div className=" rounded-md" key={item.id}>
              <div className=" flex justify-center rounded-t-xl">
                <img
                  src={item.img}
                  alt="food"
                  className="w-[400px] rounded-full h-[200px] pl-5 object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold uppercase">
                  {" "}
                  {item.title}{" "}
                </p>
                <p className="text-xl font-semibold">₹ {item.price} </p>
                <button className="bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] hover:text-[#fbc531] font-semibold"
                onClick={handleAdd}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FoodsLider;
