
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

    const event = evenementsData?.aVenir?.[0];
    if (!event) return null;

    const storageKey = `eventModalClosed_${event.id}`;

    useEffect(() => {
    const hasClosed = localStorage.getItem(storageKey);

    if (!hasClosed) {
        const timer = setTimeout(() => setIsOpen(true), 1500);
        return () => clearTimeout(timer);
    }
    }, [storageKey]);

    const closeForeverForThisEvent = () => {
    localStorage.setItem(storageKey, "true");
    setIsOpen(false);
    };

    const handleRegister = () => {
    window.open(event.billeterie, "_blank");
    closeForeverForThisEvent();
    };

    const handleLearnMore = () => {
    window.location.href = event.path;
    closeForeverForThisEvent();
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) localStorage.setItem(storageKey, "true");}}>
        <DialogContent className="bg-gradient-to-br from-[#0c0c1e] to-[#1a1a3e] border-blue-500/30 text-white max-w-lg mx-auto rounded-2xl w-[calc(100%-2rem)] sm:w-full">
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
                className="px-6 py-3 bg-gradient-to-r cursor-pointer from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
                S'inscrire maintenant
            </button>
            <button
                onClick={handleLearnMore}
                className="px-6 py-3 bg-transparent cursor-pointer border-2 border-blue-400/50 hover:border-blue-400 text-blue-300 hover:text-blue-200 font-semibold rounded-lg transition-all duration-300 hover:bg-blue-500/10"
            >
                En savoir plus
            </button>
            </div>
        </DialogContent>
        </Dialog>
    );
}

export default EventModal;