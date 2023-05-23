import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slideHome.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import SwiperCore from "swiper";
import useWindowDimensions from "../hook/useDimenson";

export const HomeSlide: React.FC = () => {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={2500}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img
            className="w-full object-cover h-[500px]"
            src="https://image.tmdb.org/t/p/original/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg"
          ></img> */}

          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg)`,
            }}
            className="w-full object-cover h-[500px] bg-cover bg-center"
          >
            <div
              className=" text-white  backdrop-brightness-125 absolute
         bg-black/40 top-0 left-0 right-0 bottom-0 min-w-full"
            >
              {" "}
              <div className="flex w-full h-full flex flex-col justify-end items-start pb-32">
                <div className="pl-8 text-white font-bold w-full text-start">
                  <div className="pl-16 mb-8 text-2xl">
                    The Super Mario Bros. Movie
                  </div>
                  <div className="font-semi max-w-[700px]">
                    While working underground to fix a water main, Brooklyn
                    plumbers—and brothers—Mario and Luigi are transported down a
                    mysterious pipe and wander into a magical new world. But
                    when the brothers are separated, Mario embarks on an epic
                    quest to find Luigi.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* <img
            className="w-full object-cover h-[500px]"
            src="https://image.tmdb.org/t/p/original/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg"
          ></img> */}

          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/ryQbb26wl1ggtypXiZW0kjKZCrP.jpg)`,
            }}
            className="w-full object-cover h-[500px] bg-cover bg-center"
          >
            <div
              className=" text-white  backdrop-brightness-125 absolute
         bg-black/40 top-0 left-0 right-0 bottom-0 min-w-full"
            >
              {" "}
              <div className="flex w-full h-full flex flex-col justify-end items-start pb-32">
                <div className="pl-8 text-white font-bold w-full text-start">
                  <div className="pl-16 mb-8 text-2xl">3D肉蒲團之極樂寶鑑</div>
                  <div className="font-semi max-w-[700px]">
                    Loosely based on a 17th century erotic Chinese story named
                    The Carnal Prayer Mat, the story follows a young scholar
                    named Yangsheng who gets married to the beautiful daughter
                    of a local merchant. When their sex life proves
                    unsatisfactory, Yangsheng leaves home and journeys to the
                    Pavilion of Ultimate Bliss.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
