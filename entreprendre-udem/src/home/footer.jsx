import React from "react";

function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md text-gray-300 py-8 border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} UdeM Entreprend. Tous droits réservés.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="#"
            className="hover:text-blue-400 transition"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
