import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import useIsMobile from "../useIsMobile";
import AspectRatio from '@mui/joy/AspectRatio';

function AboutSection() {
  const isMobile = useIsMobile();

  return (
    <div id='Qui-sommes-nous' className="text-white min-h-screen px-4 sm:px-6 md:px-8 py-8">
        <h1 className="text-4xl md:text-5xl text-center mb-4 font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"> Qui sommes-nous?</h1>
        <p className="text-center text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">UdeM Entreprend est l'association étudiante dédiée à l'entrepreneuriat de l'Université de Montréal.
          Nous accompagnons les étudiants dans leur parcours entrepreneurial en offrant des ressources,
          des formations et un réseau solide pour transformer leurs idées en projets concrets.</p>
    <div className="relative">
      <div className="absolute -top-10 -left-10 w-[200px] h-[400px] bg-purple-900 opacity-65 blur-3xl z-0" />
      <motion.div
        style={{ willChange: "opacity, transform" }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5,delay: 0.1 }}
        viewport={{ once: true }}
        className="relative w-full h-[300px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl mb-10"
      >
        <img
          src="/Photo_evenement/Udem_Entreprend/YZA04168.webp"
          alt="Mission background"
          className="absolute w-full h-full object-cover object-[0%_30%] blur-[1px] brightness-80"
          loading="lazy"
        />
        <div className="relative z-10 flex items-center justify-center h-full ">
          <motion.div
            style={{ willChange: "opacity, transform" }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-[2px] border border-white/20 py-8 px-4 sm:px-6 md:px-8 rounded-xl text-center max-w-xl mx-4
              sm:mx-6
              md:mx-0"
          >
            <h2 className="text-3xl font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] mb-4">Notre Mission</h2>
            <p className="text-gray-200 text-lg mx-auto">
              Promouvoir l'entrepreneuriat à travers l'inspiration, la formation et l'accompagnement des étudiants de l'UdeM.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
    <div className="relative">
      <div className="absolute -top-10 -right-10 w-[200px] h-[400px] bg-blue-500 opacity-45 blur-3xl z-0" />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        style={{ willChange: "opacity, transform" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative w-full h-[300px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
        <img
          src="/Photo_evenement/Udem_Entreprend/2019.webp"
          alt="Mission background"
          className="absolute w-full h-full object-cover object-[0%_20%] blur-[1px] brightness-80"
          loading="lazy"
        />
        <div className="relative z-10 flex items-center justify-center h-full ">
          <motion.div
            style={{ willChange: "opacity, transform" }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="
            bg-white/10 backdrop-blur-[2px] border border-white/20 py-8 
            px-4 sm:px-6 md:px-8 rounded-xl text-center max-w-xl mx-4 sm:mx-6
            md:mx-0">
            <h2 className="text-3xl font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] mb-4">
              Notre Vision
            </h2>
            <p className="text-gray-200 text-lg mx-auto">
              Créer un écosystème entrepreneurial dynamique au sein de l'Université de Montréal,
              où chaque étudiant peut développer son potentiel entrepreneurial.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
    <div className="relative mt-16">
      <div className="absolute top-10 -left-10 w-[200px] h-[400px] bg-blue-600 opacity-45 blur-3xl z-0" />
      <div className="absolute top-10 right-0 w-[200px] h-[400px] bg-white opacity-45 blur-3xl z-0" />
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-10 place-items-center relative z-10">
        <AspectRatio objectFit="cover" ratio="16/9" className="w-full rounded-xl overflow-hidden shadow-xl"
       sx={{ bgcolor: 'transparent',backdropFilter: 'blur(6px)'}}
        variant="plain">
        <motion.div
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="h-[300px] sm:h-[400px] md:h-[500px] flex flex-col justify-center text-center overflow-y-auto bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl"
    >
          <h1 className="xl:text-4xl sm:text-xl text-4xl font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] mb-4">
            Notre Histoire
          </h1>
          <p className="text-gray-300 text-sm sm:text-lg md:text-lg md:max-w-xl mx-auto">
          {isMobile
            ? "UdeM Entreprend est né de la passion d'étudiants pour l'entrepreneuriat. Depuis, nous accompagnons les étudiants dans leurs projets et créons des liens avec l'écosystème québécois."
            : "Fondée par des étudiants passionnés d'entrepreneuriat, UdeM Entreprend a vu le jour avec l'ambition de créer une communauté entrepreneuriale forte à l'Université de Montréal. Depuis nos débuts, nous avons accompagné des centaines d'étudiants dans la réalisation de leurs projets, organisant des événements inspirants et créant des liens durables avec l'écosystème entrepreneurial québécois."
          }
          </p>
        </motion.div>
        </AspectRatio>
        <AspectRatio objectFit="cover" ratio="16/9" className="w-full rounded-xl overflow-hidden shadow-xl"
        variant="plain"
        sx={{ bgcolor: 'transparent'}}>
        <motion.div
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="w-full rounded-lg overflow-hidden h-[300px] sm:h-[400px] md:h-[500px]"
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            src="/Photo_evenement/Udem_Entreprend/equipe2019.webp"
            alt="Équipe 2019"
            className="w-full h-full object-cover [0%_30%]"
            loading="lazy"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/Membre photo 2023-2024/Photo Équipe.webp"
            alt="Équipe 2023-2024"
            className="w-full h-full object-cover object-[0%_40%]"
            loading="lazy"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/Membre photo 2024-2025/Photo Équipe.webp"
            alt="Équipe 2024-2025"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/Photo_evenement/1744069996453.webp"
            alt="Événement récent"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
    </AspectRatio>
      </div>
    </div>
    </div>
  );
}

export default AboutSection;
