
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {evenementsData} from "../data/EvenementData";


function EventModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasClosedModal = localStorage.getItem("eventModalClosed");
        
        if (!hasClosedModal) {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);
        
        return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem("eventModalClosed", "true");
    };

    const handleRegister = () => {
        window.open(evenementsData.aVenir[0].billeterie, "_blank");
        handleClose();
    };

    const handleLearnMore = () => {
        window.location.href = evenementsData.aVenir[0].path;
        handleClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="bg-gradient-to-br from-[#0c0c1e] to-[#1a1a3e] border-blue-500/30 text-white max-w-lg">
            <DialogHeader>
            <div className="flex justify-center mb-2">
                <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
                <p className="text-blue-300 text-sm font-semibold">
                    {evenementsData.aVenir[0].date}
                </p>
                </div>
            </div>

            <DialogTitle className="text-3xl md:text-4xl font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent text-center">
                {evenementsData.aVenir[0].titre}
            </DialogTitle>

            <DialogDescription className="text-gray-300 text-base md:text-lg leading-relaxed text-center pt-2">
                {evenementsData.aVenir[0].smallresume}
            </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button
                onClick={handleRegister}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
                S'inscrire maintenant
            </button>
            <button
                onClick={handleLearnMore}
                className="px-6 py-3 bg-transparent border-2 border-blue-400/50 hover:border-blue-400 text-blue-300 hover:text-blue-200 font-semibold rounded-lg transition-all duration-300 hover:bg-blue-500/10"
            >
                En savoir plus
            </button>
            </div>

            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
        </DialogContent>
        </Dialog>
    );
}

export default EventModal;