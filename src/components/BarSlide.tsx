import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./BarSlide.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import SwiperCore from "swiper";
import useWindowDimensions from "../hook/useDimenson";
import { Link } from "react-router-dom";
const ProductCard: React.FC = () => {
  return (
    <>
      <div className="flex w-full h-full">
        <img
          className="w-full bg-cover"
          src="https://image.tmdb.org/t/p/original/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg"
        ></img>
      </div>
    </>
  );
};

export const BarSlide: React.FC<{
  id: (number | null)[];
  image: string[];
}> = (props) => {
  const { width } = useWindowDimensions();
  const [slideView, setSlideView] = useState<number>(width / 500 + 2);
  useEffect(() => {
    if (width < 500) {
      setSlideView(3);
    } else if (width >= 500 && width < 1000) {
      setSlideView(4);
      console.log(width);
    } else if (width > 1000) {
      setSlideView(5);
    }
  }, []);
  useEffect(() => {
    console.log(width);
    if (width < 500) {
      setSlideView(3);
    } else if (width >= 500 && width < 1000) {
      setSlideView(4);
      console.log(width);
    } else if (width > 1000) {
      setSlideView(5);
    }
  }, [width]);

  useEffect(() => {
    console.log(width);
    if (width < 500) {
      setSlideView(1);
    } else if (width >= 500 && width < 1000) {
      setSlideView(2);
      console.log(width);
    } else {
      setSlideView(5);
    }
  }, []);
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        slidesPerView={slideView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // centeredSlides={false}
        loop={true}
        speed={5000}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {props.image.map((m, index) => {
          return (
            <SwiperSlide>
              <Link to={"/movies/" + props.id[index]} className="rounded-lg">
                <div className="flex w-full h-full rounded-md">
                  <img className="w-full bg-cover rounded-lg" src={m}></img>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
