import React, { useEffect,useState } from "react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#0c0c1e] to-[#121232]">
        <div className="text-blue-400 text-xl animate-pulse">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans relative overflow-hidden">
      <Header />
      <StarsCanvas nombreEtoile={300} />
      <section className="relative z-10 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
            {event.titre}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-3 sm:mt-4 text-gray-400 text-xs sm:text-sm">
            <span>{event.date}</span>
            <span>{event.lieu}</span>
          </div>
          <div className="w-12 sm:w-16 h-1 bg-blue-400 mx-auto my-6 sm:my-8"></div>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg px-2 sm:px-0">
            {event.resume}
          </p>
        </div>
      </section>
      {event.galerie?.length > 0 && (
        <section className="relative z-10 py-10 sm:py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] mb-2">
              Galerie
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-blue-400 mx-auto mb-6 sm:mb-8"></div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-2 sm:p-4">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={20}
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
                      className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      )}
      {event.invite?.length > 0 && (
        <section className="relative z-10 py-10 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] mb-2">
              Invités d'honneur
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-blue-400 mx-auto mb-6 sm:mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {event.invite.map((person, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <img
                    src={person.image}
                    alt={person.nom}
                    className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover rounded-full mx-auto border-4 border-blue-400 mb-4 sm:mb-6"
                  />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-200 mb-2">
                    {person.nom}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{person.description}</p>
                  <div className="mt-auto flex justify-center pt-4">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline">
                    LinkedIn
                  </a>
                  </div>
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
