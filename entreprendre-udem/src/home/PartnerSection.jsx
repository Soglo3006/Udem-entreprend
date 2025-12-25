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
      <h1 className="text-3xl md:text-4xl text-center mb-4 font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
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
              loading="lazy"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.educalcool.qc.ca/">
            <img
              src="/Partenaires/logo-edc.svg"
              alt="edc"
              className="w-60 h-60 mx-auto -translate-y-5 object-contain brightness-0 invert opacity-80"
              loading="lazy"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.rbcroyalbank.com/fr/modes-dacces/banque-en-direct/index.html">
            <img
              src="/Partenaires/RBC.svg"
              alt="RBC"
              className="w-60 h-60 mx-auto -translate-y-2 object-contain scale-140"
              loading="lazy"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://acee.qc.ca/">
            <img
              src="/Partenaires/ACEE.webp"
              alt="ACEE"
              className="w-60 h-60 mx-auto -translate-y-2 object-contain scale-70"
              loading="lazy"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://lescerclesdor.ca/">
            <img
              src="/Partenaires/cercles-or.webp"
              alt="cercles-or"
              className="w-60 h-60 mx-auto -translate-y-3 object-contain scale-75"
              loading="lazy"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://mainqc.com/">
            <img
              src="/Partenaires/main.png"
              alt="main"
              className="w-60 h-60 mx-auto -translate-y-5 object-contain brightness-0 invert opacity-80"
              loading="lazy"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.desjardins.com/qc/fr.html">
            <img
              src="/Partenaires/Desjardins.png"
              alt="main"
              className="w-60 h-60 mx-auto object-contain -translate-y-5"
              loading="lazy"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.saq.com/?srsltid=AfmBOorCbiFu0pf_PmTuUXacuYk3lHJuKvkAa6ysPjkUbBQm0CDF_1_F">
            <img
              src="/Partenaires/Saq.png"
              alt="main"
              className="w-60 h-60  mx-auto object-contain -translate-y-5"
              loading="lazy"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.iga.net/fr">
            <img
              src="/Partenaires/IGA.png"
              alt="main"
              className="w-60 h-60 mx-auto object-contain scale-70 -translate-y-5"
              loading="lazy"
            />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.st-hubert.com/fr.html">
            <img
              src="/Partenaires/St-hubert.png"
              alt="main"
              className="w-60 h-60 mx-auto -translate-y-5 object-contain scale-75"
              loading="lazy"
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
      <div className="hidden lg:flex justify-center items-center flex-wrap gap-4 mt-10 mx-auto">
        <a href="https://millenium.umontreal.ca/">
            <img
              src="/Partenaires/millénium.webp"
              alt="millénium"
              className="w-60 h-60 m-4 object-contain"
              loading="lazy"
            />
            </a>
            <a href="https://www.educalcool.qc.ca/">
            <img
              src="/Partenaires/logo-edc.svg"
              alt="edc"
              className="w-60 h-60 m-4 object-contain brightness-0 invert opacity-80 "
              loading="lazy"
            />
            </a>
            <a href="https://www.rbcroyalbank.com/fr/modes-dacces/banque-en-direct/index.html">
            <img
              src="/Partenaires/RBC.svg"
              alt="RBC"
              className="w-60 h-60 object-contain scale-140"
              loading="lazy"
            />
            </a>
            <a href="https://acee.qc.ca/">
            <img
              src="/Partenaires/ACEE.webp"
              alt="ACEE"
              className="w-60 h-60 object-contain scale-70"
              loading="lazy"
            />
            </a>
            <a href="https://lescerclesdor.ca/">
            <img
              src="/Partenaires/cercles-or.webp"
              alt="cercles-or"
              className="w-60 h-60 object-contain scale-75"
              loading="lazy"
            />
            </a>
            <a href="https://mainqc.com/">
            <img
              src="/Partenaires/main.png"
              alt="main"
              className="w-60 h-60 object-contain brightness-0 invert opacity-80"
              loading="lazy"
            />
            </a>
            <a href="https://www.desjardins.com/qc/fr.html">
            <img
              src="/Partenaires/Desjardins.png"
              alt="main"
              className="w-60 h-60 object-contain "
              loading="lazy"
            />
            </a>
            <a href="https://www.saq.com/?srsltid=AfmBOorCbiFu0pf_PmTuUXacuYk3lHJuKvkAa6ysPjkUbBQm0CDF_1_F">
            <img
              src="/Partenaires/Saq.png"
              alt="main"
              className="w-60 h-60 object-contain"
              loading="lazy"
            />
            </a>
            <a href="https://www.iga.net/fr">
            <img
              src="/Partenaires/IGA.png"
              alt="main"
              className="w-60 h-60 object-contain scale-70"
              loading="lazy"
            />
            </a>
            <a href="https://www.st-hubert.com/fr.html">
            <img
              src="/Partenaires/St-hubert.png"
              alt="main"
              className="w-60 h-60 object-contain scale-75"
              loading="lazy"
            />
            </a>

      </div>
    </div>
  );
}

export default PartnerSection;
