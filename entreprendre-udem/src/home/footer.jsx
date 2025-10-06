import React from "react";
import { Box, Input, Button } from "@mui/joy";
import CongratCard from "../ConfirmationMessage";

function Footer() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [confirmationMessage, setConfirmationMessage] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageError = {};
    if (email.trim() === ""){
      messageError.email = "Entrez votre courriel";
    }
    if (Object.keys(messageError).length > 0) {
      setError(messageError.email);
      return;
    }
    try {
      const response = await fetch("https://udem-entreprend.onrender.com/infolettre", {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email}),
      });
      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }
      setEmail("");
      setError("");
      setConfirmationMessage(true);
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <footer className="bg-black/50 backdrop-blur-md text-gray-300 py-8 border-t border-white/10 mt-5">
      <div className="max-w-7xl mx-auto px-4 text-center">
      <Box component="section" sx={{
            backgroundColor: "transparent",
            color: "white",
            py: 4,
            px: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}>
            <h1 className="lg:text-left text-2xl font-extrabold bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] mb-6 lg:max-w-xl mx-auto md:mx-0">
              Abonnez-vous à notre infolettre pour recevoir nos nouvelles
              </h1>
          <Box
            component="form"
            onSubmit={(e) => e.preventDefault()}
            sx={{
              display: "flex",
              flexDirection: "row",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "8px",
              overflow: "hidden",
              width: { xs: "100%", sm: "auto" },
              mx: "auto",
            }}
          >
            <Input
              placeholder={error ? error : "Courriel"}
              error={!!error} 
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
              sx={{
                "--Input-focusedHighlight": "transparent",
                borderRadius: "8px",
                width: { xs: "100%", sm: "450px" },
                height: { xs: "40px", sm: "56px" },
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "white",
                border: error ? "1px solid red" : "1px solid rgba(255,255,255,0.3)",
                input: {
                  "&::placeholder": {
                    color: error ? "rgba(255,0,0,0.7)" : "rgba(255,255,255,0.5)",
                  },
                },
              }}
            />
          </Box>
          <Button
              type="submit"
              onClick={handleSubmit}
              variant="outlined"
              sx={{
                borderRadius: "8px",
                color: "white",
                borderColor: "rgba(255,255,255,0.3)",
                width: { xs: "100%", sm: "100px" },
                height: { xs: "40px", sm: "56px" },
                "&:hover": {
                  backgroundColor: "rgba(59,130,246,0.2)",
                  borderColor: "rgba(59,130,246,0.5)",
                },
              }}
            >
              S'abonner
            </Button>
      </Box>
        <hr className="my-6 border-white/20" />
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/entreprend.umontreal?locale=fr_CA" className="hover:text-blue-400 transition">Facebook</a>
          <a href="https://www.instagram.com/udem.entreprend/" className="hover:text-blue-400 transition">Instagram</a>
          <a href="https://www.linkedin.com/company/udem-entreprend/?originalSubdomain=ca" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="https://www.tiktok.com/@udem.entreprend" className="hover:text-blue-400 transition">Tiktok</a>
        </div>
        <div className="mt-4 text-sm font-semibold">
          <a href="mailto:udem.entreprend@gmail.com" className="hover:underline"> udem.entreprend@gmail.com</a>
        </div>
        <hr className="my-6 border-white/20" />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} UdeM Entreprend. Tous droits réservés.
        </p>
      </div>
      {confirmationMessage && <CongratCard onClose={() => setConfirmationMessage(false)} TypeSubmission="feedback"/>}
    </footer>
      
  );
}

export default Footer;
