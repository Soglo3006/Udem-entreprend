import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function CommunitySection() {
  const eventImages = [
    "/Photo_evenement/Udem_Entreprend/T_M.jpg",
    "/Photo_evenement/Udem_Entreprend/YZA04397.webp",
    "/Photo_evenement/Udem_Entreprend/YZA04318.webp",
    "/Photo_evenement/Udem_Entreprend/YZA04457.webp",
    "/Photo_evenement/Udem_Entreprend/YZA04489.webp"
  ];

  return (
    <section id="communaute" className="w-full py-20">
      <h2 className="text-center text-3xl font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
        Une communauté en action
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {eventImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-2xl overflow-hidden max-w-5xl mx-auto mt-6 px-4 sm:px-8 md:px-10">
              <img
                src={src}
                alt={`Événement ${index + 1}`}
                className="w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CommunitySection;

