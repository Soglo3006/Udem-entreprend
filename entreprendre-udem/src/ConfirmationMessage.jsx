import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Close from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

export default function CongratCard({onClose}) {
  const navigate = useNavigate();
  return (
    <div style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', 
          display: 'flex',            
        justifyContent: 'center',     
        alignItems: 'center',   
        zIndex: 9999, 
        }}>
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
      <Typography level="title-lg" >
        Merci d’avoir pris le temps de remplir ce formulaire. Notre équipe communiquera avec vous sous peu.
        <Button variant="solid" color="primary" sx={{mt:2}} onClick={() => navigate("/")}>
          Revenir à la page d'accueil
        </Button>
      </Typography>
    </Card>
    </div>
  );
}