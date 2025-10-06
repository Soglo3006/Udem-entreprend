import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Close from '@mui/icons-material/Close';
import Modal from '@mui/joy/Modal';
import { useNavigate } from "react-router-dom";

export default function CongratCard({onClose,TypeSubmission}) {
  const navigate = useNavigate();
  return (
    <Modal open={true} onClose={onClose} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card
      data-resizable
      sx={{
        position:'relative',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
        height:300,
        gap: 3, 
      }}
    >
        <IconButton  sx={{position:'absolute', top:'10px', right:'10px'}}
        onClick={onClose}>
        <Close />
      </IconButton>
      {TypeSubmission === 'feedback'? (
        <Typography level="title-lg" >
        Merci pour votre retour, il nous aide à rendre notre service meilleur.
      </Typography>) : TypeSubmission === 'infolettre' ? (
        <Typography level="title-lg" >
        Merci pour votre inscription à notre infolettre. Vous recevrez bientôt nos nouvelles et événements à venir.
      </Typography>
      ) : (
        <Typography level="title-lg" >
        Merci d’avoir pris le temps de remplir ce formulaire. Notre équipe communiquera avec vous.
        <Button variant="solid" color="primary" sx={{mt:2}} onClick={() => navigate("/")}>
          Revenir à la page d'accueil
        </Button>
      </Typography>
      )}
    </Card>
    </Modal>
  );
}