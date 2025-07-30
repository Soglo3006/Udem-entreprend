import React from "react";
import { useParams } from "react-router-dom";
import Header from "./home/header";
import Footer from "./home/footer";
import { evenementsData } from "./data/EvenementData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StarsCanvas from "./home/StarsCanvas";

function EvenementDetail() {
  const { eventId } = useParams();
  const event = evenementsData.find(e => e.id === eventId);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans relative overflow-hidden">
      <Header />
      <StarsCanvas nombreEtoile={300}/>
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
            {event.titre}
          </h1>
          <div className="flex justify-center gap-6 mt-4 text-gray-400 text-sm">
            <span>{event.date}</span>
            <span>{event.lieu}</span>
          </div>
          <div className="w-16 h-1 bg-blue-400 mx-auto my-8"></div>
          <p className="text-gray-300 leading-relaxed text-lg">
            {event.resume}
          </p>
        </div>
      </section>
      {event.galerie?.length > 0 && (
        <section className="relative z-10 py-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">Galerie</h2>
            <div className="w-16 h-1 bg-blue-400 mx-auto mb-8"></div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-4">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                navigation
                className="rounded-xl overflow-hidden"
              >
                {event.galerie.map((photo, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-[400px] md:h-[500px] object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      )}

      {/* Section Invités */}
      {event.invite?.length > 0 && (
        <section className="relative z-10 py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">Invités d'honneur</h2>
            <div className="w-16 h-1 bg-blue-400 mx-auto mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {event.invite.map((person, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <img
                    src={person.image}
                    alt={person.nom}
                    className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto border-4 border-blue-400 mb-4"
                  />
                  <h3 className="text-2xl font-bold text-blue-200">{person.nom}</h3>
                  <p className="text-blue-300 font-semibold mb-4">
                    {person.poste || person.titre || "Invité d'honneur"}
                  </p>
                  <p className="text-gray-300 text-sm">{person.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default EvenementDetail;
