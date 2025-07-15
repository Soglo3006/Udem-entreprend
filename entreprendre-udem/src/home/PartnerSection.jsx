import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function PartnerSection() {
  return (
    <div
      id="partenaire"
      className="p-10 bg-[#0c0c1e] text-center relative z-10"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-wide text-blue-400 animate-pulse">
        Nos Partenaires
      </h1>
      <div className="block lg:hidden relative">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className="max-w-xs mx-auto"
        >
          <SwiperSlide>
            <img
              src="/Partenaires/Millénium2.png"
              alt="millénium"
              className="w-60 h-60 mx-auto object-contain filter grayscale hover:filter-none transition duration-500"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Partenaires/logo-edc.svg"
              alt="edc"
              className="w-60 h-60 mx-auto object-contain filter grayscale hover:grayscale-0 hover:invert transition duration-500"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Partenaires/RBC.svg"
              alt="RBC"
              className="w-60 h-60 mx-auto object-contain filter grayscale hover:filter-none transition duration-500"
            />
          </SwiperSlide>
        </Swiper>
        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #3B82F6;
            top: 50%;
            transform: translateY(-50%);
          }
          .swiper-button-next {
            right: 0;
          }
          .swiper-button-prev {
            left: 0;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 24px;
          }
        `}</style>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-4 mt-10">
        <img
          src="/Partenaires/Millénium2.png"
          alt="millénium"
          className="w-60 h-60 m-4 object-contain filter grayscale hover:filter-none transition duration-500"
        />
        <img
          src="/Partenaires/logo-edc.svg"
          alt="edc"
          className="w-60 h-60 m-4 object-contain filter grayscale hover:grayscale-0 hover:invert transition duration-500"
        />
        <img
          src="/Partenaires/RBC.svg"
          alt="RBC"
          className="w-60 h-60 m-4 object-contain filter grayscale hover:filter-none transition duration-500"
        />
      </div>
    </div>
  );
}

export default PartnerSection;
