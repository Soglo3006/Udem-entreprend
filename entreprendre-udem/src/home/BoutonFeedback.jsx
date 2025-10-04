import * as React from 'react';
import Modal from '@mui/joy/Modal';
import { VscFeedback } from "react-icons/vsc";
import CongratCard from "../ConfirmationMessage";

export default function Feedback() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errors, Seterrors] = React.useState({});
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  const handleSubmit = async () => {
    const messageError = {};
    if (message.trim() === '') {
      messageError.message = "Expliquez votre avis";
    }
    if (Object.keys(messageError).length > 0) {
      Seterrors(messageError);
      return;
    }
    try{
      const response = await fetch("https://udem-entreprend.onrender.com/feedback", {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({type,message}),
      });
      if (!response.ok) {
      alert("Erreur côté serveur !");
      return;
    }
      setShowConfirmation(true);
      setMessage("");
      setType("");
      setOpen(false);
  }
  catch (error) {
      alert(error.message);
    };

  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { 
      e.preventDefault(); 
      handleSubmit();     
    }
  };

  return (
    <React.Fragment>
      <div className="fixed bottom-10 right-0 z-50">
        <div
          onClick={() => setOpen(true)}
          className="group relative flex items-center justify-center 
                     h-12 w-12 bg-blue-600 rounded-s-full cursor-pointer 
                     overflow-hidden transition-all duration-300 
                     hover:w-23"
        >
          <VscFeedback className="text-white text-2xl transition-opacity duration-200 group-hover:opacity-0" />
          <span className="absolute left-4 text-white font-medium opacity-0 
                           transition-opacity duration-200 group-hover:opacity-100">
            Feedback
          </span>
        </div>
      </div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <div className="relative z-10 max-w-lg w-full bg-white/10 border border-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl space-y-4">
          <h2 className="text-2xl font-bold text-center text-blue-300">Donnez votre avis</h2>
          <div>
            <label className="text-white/80">Type de feedback</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 mt-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="bug" className="text-black">Bug</option>
              <option value="suggestion" className="text-black">Suggestion</option>
              <option value="autre" className="text-black">Autre</option>
            </select>
          </div>
          <div>
            <label className="text-white/80">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown} 
              rows="4"
              placeholder="Écrivez votre retour ici..."
              className="w-full px-4 py-2 mt-2 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>
          {errors && <p className="text-red-400">{errors.message}</p>}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full transition transform hover:scale-105"
          >
            Envoyer
          </button>
        </div>
      </Modal>
      {showConfirmation && <CongratCard onClose={() => setShowConfirmation(false)} TypeSubmission={'feedback'} />}
    </React.Fragment>
  );
}
