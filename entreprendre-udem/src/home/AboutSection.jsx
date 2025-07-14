import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function AboutSection() {
  return (
    <div id='Qui-sommes-nous' className="bg-gradient-to-b via-gray-900 to-gray-800 text-white min-h-screen px-4
    sm:px-6
    md:px-8
    py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-wide text-blue-400 animate-pulse"> Qui sommes-nous?</h1>
        <p className="text-center text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">UdeM Entreprend est l'association étudiante dédiée à l'entrepreneuriat de l'Université de Montréal.
          Nous accompagnons les étudiants dans leur parcours entrepreneurial en offrant des ressources,
          des formations et un réseau solide pour transformer leurs idées en projets concrets.</p>
        <div className="absolute top-[1900px] left-0 w-[200px] h-[400px] bg-purple-900 opacity-65 blur-3xl z-0" />
        <motion.div
          style={{ willChange: "opacity, transform" }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px]
  sm:h-[300px]
  md:h-[400px] rounded-xl overflow-hidden shadow-xl mb-10">
          <img
            src="/Photo_evenement/Udem_Entreprend/YZA04168.webp"
            alt="Mission background"
            className="absolute w-full h-full object-cover object-[0%_30%] blur-[1px] brightness-80"
            />
          <div className="relative z-10 flex items-center justify-center h-full ">
            <motion.div
              style={{ willChange: "opacity, transform" }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-[2px] border border-white/20 py-8 px-4 sm:px-6 md:px-8 rounded-xl text-center max-w-xl mx-4
  sm:mx-6
  md:mx-0">
              <h2 className="text-3xl font-semibold text-blue-200 mb-4">Notre Mission</h2>
              <p className="text-gray-200 text-lg mx-auto">
                Promouvoir l'entrepreneuriat à travers l'inspiration, la formation et l'accompagnement des étudiants de l'UdeM.
              </p>
            </motion.div>
          </div>
            </motion.div>
                    <div className="absolute top-[2330px] right-0 w-[200px] h-[400px] bg-blue-500 opacity-45 blur-3xl z-0" />
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              style={{ willChange: "opacity, transform" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full h-[300px]
  sm:h-[300px]
  md:h-[400px] rounded-xl overflow-hidden shadow-xl">
          <img
            src="/Photo_evenement/Udem_Entreprend/2019.webp"
            alt="Mission background"
            className="absolute w-full h-full object-cover object-[0%_20%] blur-[1px] brightness-80"/>
          <div className="relative z-10 flex items-center justify-center h-full ">
            <motion.div
              style={{ willChange: "opacity, transform" }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-[2px] border border-white/20 py-8 px-4 sm:px-6 md:px-8 rounded-xl text-center max-w-xl mx-4
  sm:mx-6
  md:mx-0">
              <h2 className="text-3xl font-semibold text-blue-200 mb-4">Notre Vision</h2>
              <p className="text-gray-200 text-lg mx-auto">
                Créer un écosystème entrepreneurial dynamique au sein de l'Université de Montréal,
                où chaque étudiant peut développer son potentiel entrepreneurial et contribuer à l'innovation de demain.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute top-[2850px] right-0 w-[200px] h-[400px] bg-white opacity-45 blur-3xl z-0" />
        <div className="absolute top-[2850px] left-0 w-[200px] h-[400px] bg-blue-600 opacity-45 blur-3xl z-0" />
        <div className="relative mt-16">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-10 place-items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              style={{ willChange: "opacity, transform" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:h-[500px] sm:h-[250px] h-[150px] flex flex-col justify-center bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl text-center shadow-xl not-sm:max-w-xl">
              <h1 className="md:text-4xl text-2xl font-semibold text-blue-200 mb-4">Notre Histoire</h1>
              <p className="text-gray-300 md:text-xl text-lg max-xs">
                Fondée par des étudiants passionnés d'entrepreneuriat, UdeM Entreprend a vu le jour avec l'ambition de créer une communauté entrepreneuriale forte à l'Université de Montréal.
                Depuis nos débuts, nous avons accompagné des centaines d'étudiants dans la réalisation de leurs projets, organisant des événements inspirants et créant des liens durables avec
                l'écosystème entrepreneurial montréalais.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              style={{ willChange: "opacity, transform" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full h-[500px]">
              <Swiper 
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
              >
                <SwiperSlide>
                  <img
                    src="/Photo_evenement/Udem_Entreprend/equipe2019.webp"
                    alt="Vision de l'association"
                    className="w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover object-[0%_20%] rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/Membre photo 2023-2024/Photo Équipe.webp"
                    alt="Vision de l'association"
                    className="w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover object-[0%_20%] rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/Membre photo 2024-2025/Photo Équipe.webp"
                    alt="Vision de l'association"
                    className="w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/Photo_evenement/1744069996453.webp"
                    alt="Vision de l'association"
                    className="w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover rounded-lg"/>
                </SwiperSlide>
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>
  );
}

export default AboutSection;
