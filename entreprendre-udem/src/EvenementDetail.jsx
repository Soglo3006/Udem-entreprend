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

function EvenementDetail() {
  const { eventId } = useParams();
  const event = evenementsData.find(e => e.id === eventId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans relative overflow-hidden ">
      <Header />
      {/* ... ici tu peux réutiliser tout ton contenu de AltitudePage mais basé sur `event` */}
      <div className="p-10 text-center justify-center">
        <h1 className="text-3xl font-bold text-blue-300 mb-2">{event.titre}</h1>
        <p className="text-gray-400">{event.date} - {event.lieu}</p>
        <p className="mt-4">{event.resume}</p>
        {event.invite?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Invités d'honneur</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.invite.map((person, index) => (
                        <div key={index} className="text-center overflow-hidden max-w-5xl mx-auto">
                        <img src={person.image} alt={person.nom} className="w-[380px] h-[320px]sm:h-[380px] md:h-[420px] object-cover object-center mx-auto rounded-xl shadow-lg mb-4" />
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-xl text-white">
                            <h4 className="text-xl font-semibold mb-2 text-blue-200">{person.nom}</h4>
                            <p className="text-sm leading-relaxed">{person.description}</p>
                        </div>
                        </div>
                    ))}
            </div>
          </div>
        )}

        {event.galerie?.length > 0 && (
          <div className="my-8">
            <h2 className="text-center justify-center text-xl font-semibold mb-4 text-blue-200">Galerie</h2>
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              navigation
            >
              {event.galerie.map((photo,index) =>(
                            <SwiperSlide key={index}>
                                <div className="rounded-2xl overflow-hidden max-w-5xl mx-auto mt-6 px-4 sm:px-8 md:px-10">
                                <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-[550px] rounded-lg object-cover"/>
                                </div>
                            </SwiperSlide>
                        ))}
            </Swiper>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default EvenementDetail;
