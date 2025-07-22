import React from "react";
import Header  from "../home/header";
import Footer from "../home/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import {evenementsData} from "../data/EvenementData";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


function AltitudePage(){
    const event = evenementsData.find(e => e.id === "Altitude");

    return(
        <div className="min-h-screen bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans relative overflow-hidden">
            <Header/>
            <div>
                <div className="flex items-center justify-center text-center p-10 my-10 space-x-10">
                    <div className="">
                        <img src={event.imagePrincipale} alt={event.titre} className="w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl"/>
                    </div>
                    <div>
                    <div className="flex justify-center space-x-5 text-gray-400"> 
                    <div className="flex justify-center space-x-2">
                    <svg
                        className="w-5 h-5 text-white/80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    <p>{event.date}</p>
                    </div>
                    <div className="flex justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p>{event.lieu}</p>
                    </div>
                    </div>
                    <div className="justify-center text-center bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-xl max-w-4xl mx-auto text-center shadow-md">
                    <p className="text-3xl font-semibold text-blue-300">A propos de l'événement</p>
                    <p className="text-xl text-center my-4 mx-10 max-w-5xl">{event.resume}</p>
                    <div >
                    <div className="">
                        {event.partenaires.map((partenaire) => (
                            <a href={partenaire.lien}>
                                <img src={partenaire.logo} alt={partenaire.nom} className="w-full h-auto max-h-[100px] object-contain"/>
                            </a>
                        ))}
                    </div>
                </div>
                    </div>
                    </div>
                    
                </div>
                <div className=" bg-[#0c0c1e] text-center relative z-10 pt-6 pb-15">
                <p className="items-center justify-center text-center text-blue-300 text-3xl font-semibold m-8">Invité d'honneur</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16">
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
                <div className="mt-14 mb-10">
                <p className="text-center justify-center text-3xl font-semibold text-blue-300 mb-5">Galerie de Photos</p>
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
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
            </div>
            <Footer/>
        </div>

    )
}

export default AltitudePage;