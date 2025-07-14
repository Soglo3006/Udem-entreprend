import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 relative">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-400">
          <span className="text-white">UdeM</span> Entreprend
        </a>
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <Link to="/#Qui-sommes-nous">
            Qui sommes-nous ?
          </Link>
          </li>
          <li>
            <Link to="/#equipe">
            Équipe
          </Link>
          </li>
          <li>
            <Link to="/#evenements">
              Événements
            </Link>
          </li>
          <li>
            <Link to="/#partenaire">
              Partenaires
            </Link>
          </li>
          <li>
            <Link to="/#benevole">
              Bénévole
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}



export default Header;
