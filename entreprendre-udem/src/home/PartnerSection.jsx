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
            <a href="https://millenium.umontreal.ca/">
            <img
              src="/Partenaires/millénium.webp"
              alt="millénium"
              className="w-60 h-60 mx-auto -translate-y-3 object-contain"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.educalcool.qc.ca/">
            <img
              src="/Partenaires/logo-edc.svg"
              alt="edc"
              className="w-60 h-60 mx-auto -translate-y-5 object-contain"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.rbcroyalbank.com/fr/modes-dacces/banque-en-direct/index.html">
            <img
              src="/Partenaires/RBC.svg"
              alt="RBC"
              className="w-60 h-60 mx-auto -translate-y-2 object-contain scale-140"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://acee.qc.ca/">
            <img
              src="/Partenaires/ACEE.webp"
              alt="ACEE"
              className="w-60 h-60 mx-auto -translate-y-2 object-contain scale-70"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://lescerclesdor.ca/">
            <img
              src="/Partenaires/cercles-or.webp"
              alt="cercles-or"
              className="w-60 h-60 mx-auto -translate-y-3 object-contain scale-75"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://mainqc.com/">
            <img
              src="/Partenaires/main.png"
              alt="main"
              className="w-60 h-60 mx-auto -translate-y-5 object-contain"
            />
            </a>
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
        <a href="https://millenium.umontreal.ca/">
            <img
              src="/Partenaires/millénium.webp"
              alt="millénium"
              className="w-60 h-60 m-4 object-contain"
            />
            </a>
            <a href="https://www.educalcool.qc.ca/">
            <img
              src="/Partenaires/logo-edc.svg"
              alt="edc"
              className="w-60 h-60 m-4 object-contain"
            />
            </a>
            <a href="https://www.rbcroyalbank.com/fr/modes-dacces/banque-en-direct/index.html">
            <img
              src="/Partenaires/RBC.svg"
              alt="RBC"
              className="w-60 h-60 object-contain scale-140"
            />
            </a>
            <a href="https://acee.qc.ca/">
            <img
              src="/Partenaires/ACEE.webp"
              alt="ACEE"
              className="w-60 h-60 object-contain scale-70"
            />
            </a>
            <a href="https://lescerclesdor.ca/">
            <img
              src="/Partenaires/cercles-or.webp"
              alt="cercles-or"
              className="w-60 h-60 object-contain scale-75"
            />
            </a>
            <a href="https://mainqc.com/">
            <img
              src="/Partenaires/main.png"
              alt="main"
              className="w-60 h-60 object-contain"
            />
            </a>
      </div>
    </div>
  );
}

export default PartnerSection;
