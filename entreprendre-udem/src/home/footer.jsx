import React from "react";

function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md text-gray-300 py-8 border-t border-white/10 mt-2">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/entreprend.umontreal?locale=fr_CA" className="hover:text-blue-400 transition">Facebook</a>
          <a href="https://www.instagram.com/udem.entreprend/" className="hover:text-blue-400 transition">Instagram</a>
          <a href="https://www.linkedin.com/company/udem-entreprend/?originalSubdomain=ca" className="hover:text-blue-400 transition">LinkedIn</a>
        </div>
        <div className="mt-4 text-sm font-semibold">
          <a href="mailto:info@udementreprend.ca" className="hover:underline"> info@udementreprend.ca</a>
        </div>
        <hr className="my-6 border-white/20" />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} UdeM Entreprend. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
