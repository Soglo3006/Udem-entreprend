import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 relative">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-400">
          <span className="text-white">UdeM</span> Entreprend
        </a>
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><HashLink smooth to="/#Qui-sommes-nous" className="hover:text-blue-400 transition">Qui sommes-nous</HashLink></li>
          <li><HashLink smooth to="/#equipe" className="hover:text-blue-400 transition">Équipe</HashLink></li>
          <li><HashLink smooth to="/#evenements" className="hover:text-blue-400 transition">Événements</HashLink></li>
          <li><HashLink smooth to="/#partenaire" className="hover:text-blue-400 transition">Partenaires</HashLink></li>
          <li><HashLink smooth to="/#benevole" className="hover:text-blue-400 transition">Bénévole</HashLink></li>
        </ul>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-m  text-white p-4">
          <ul className="flex flex-col gap-4 text-center jusstify-center">
            <li><Link to="/#Qui-sommes-nous" onClick={() => setIsMenuOpen(false)}>Qui sommes-nous</Link></li>
            <li><Link to="/#equipe" onClick={() => setIsMenuOpen(false)}>Équipe</Link></li>
            <li><Link to="/#evenements" onClick={() => setIsMenuOpen(false)}>Événements</Link></li>
            <li><Link to="/#partenaire" onClick={() => setIsMenuOpen(false)}>Partenaires</Link></li>
            <li><Link to="/#benevole" onClick={() => setIsMenuOpen(false)}>Bénévole</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
