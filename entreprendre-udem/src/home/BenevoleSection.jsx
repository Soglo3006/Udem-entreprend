import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

function BenevoleSection() {
  const benveloleImages = [
    "/Photo_evenement/Udem_Entreprend/YZA04598.webp",
    "/Photo_evenement/Udem_Entreprend/YZA04448.webp",
    "/Photo_evenement/Udem_Entreprend/YZA04458.webp"
  ];

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-10 tracking-wide text-blue-400 animate-pulse relative">
        Bénévole
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 p-5">
        <div className="p-4 items-center text-center justify-center relative overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {benveloleImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Bénévole ${index + 1}`}
                  className="w-full max-w-[300px] max-h-[400px] h-auto rounded-xl object-cover mx-auto"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div id="benevole" className="md:text-left md:ml-20 text-center relative">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-300 mb-6 max-w-xl mx-auto md:mx-0">
            Envie de rejoindre l'équipe de UdeM Entreprend comme bénévole ?
            <span className="block font-semibold text-white text-xl md:text-2xl mt-2">
              Cliquez sur le bouton ci-dessous pour accéder au formulaire.
            </span>
          </h1>
          <Link
            to="/benevole"
            className="relative inline-block px-6 py-2 rounded-full text-white font-medium
              border border-white/30 bg-white/10 backdrop-blur-md
              hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-500
              hover:text-white transition-all duration-300
              hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105"
          >
            Devenir Bénévole
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BenevoleSection;
