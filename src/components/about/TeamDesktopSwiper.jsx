import React from "react";
import classNames from "classnames";
import { team } from "../../assets";

// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import css from "./TeamDesktopSwiper.module.css";

const TeamDesktopSwiper = (props) => {
  return (
    <div className="slider-ud hidden w-full md:block">
      <Swiper
        spaceBetween={6}
        navigation={window.screen.width > 576 ? true : false}
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
        className="swiperjs-slider-ud"
      >
        {team?.map((member) => {
          return (
            <SwiperSlide
              key={member.image}
              className="overflow-hidden rounded-xl"
            >
              <div
                style={{ "--background-image": `url(${member.image})` }}
                className={classNames(
                  css.slide,
                  `h-[480px] w-full overflow-hidden rounded-xl before:hover:scale-125 xs:h-[320px] sm:h-[360px]`,
                )}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex justify-end px-1.5 py-3">
                    <div className="rounded-full bg-black/30 px-2 py-0.5 pt-1 font-semibold text-white backdrop-blur-lg xs:text-[10.5px] sm:text-[12.5px]">
                      Starts Aug 30, 12:30PM
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="mb-3 px-1 text-white">
                      <h1 className="w-[80%] truncate text-xs text-slate-300/60">
                        {member.description}
                      </h1>
                      <h1 className="truncate text-[0.79rem] font-medium sm:text-xl">
                        {member.name}
                      </h1>
                    </div>
                    <button className="mb-2 flex w-full items-center justify-center space-x-1 rounded-md bg-white py-2 font-semibold">
                      <span>
                        <i className="fa-brands fa-whatsapp text-xl text-green-600"></i>
                      </span>
                      <span>Chat</span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TeamDesktopSwiper;
