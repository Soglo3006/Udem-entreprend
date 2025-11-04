import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Button from '@mui/joy/Button';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/joy/Avatar';

function DrawerMobileNavigation() {
  const [open, setOpen] = useState(false);
  const [isProposNousOpen, setIsProposNousOpen] = useState(false);

  return (
    <React.Fragment>
      <IconButton onClick={() => {setOpen(true);setIsProposNousOpen(false)}}>
        <Menu />
      </IconButton>
      <Drawer 
      anchor="top"
      size="lg"
      open={open} onClose={() => {setOpen(false);setIsProposNousOpen(false)}
      }
      sx={[
          {
        backdropFilter: "blur(8px)",
        '& .MuiDrawer-content':  {
              backgroundColor: '#0c0c1e', 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              width: '100vw', 
              height: '100vh',
            }
          },
          open
            ? {
                '--Drawer-transitionDuration': '0.4s',
                '--Drawer-transitionFunction': 'cubic-bezier(0.79,0.14,0.15,0.86)',
              }
            : {
                '--Drawer-transitionDuration': '0.2s',
                '--Drawer-transitionFunction': 'cubic-bezier(0.77,0,0.18,1)',
              },
        ]}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="items-center justify-start mb-5 flex">
        <Avatar  src="/Logo Club/Logo.png" alt="Logo" size="lg" />
        </div>
          <ul className="flex flex-col gap-8 text-white font-medium text-xl text-center">
            <li>
              <div className="flex flex-col">
              <Button variant="plain"
              onClick={() => setIsProposNousOpen(!isProposNousOpen)}
              sx={{ color: '#60a5fa' ,padding: 0,
              minHeight: 'auto',
              margin: 0,fontSize: '1.125rem',     
              lineHeight: '1.75rem',      
              fontWeight: '400',           
              fontFamily: 'inherit',      
              textTransform: 'none',      
              '&:hover': {
                backgroundColor: 'transparent'
              }}}
              size="lg"
              
              >À propos de nous
              <div className="transition-transform duration-2000 ml-2 text-blue-400">
                  {isProposNousOpen ?(<Remove sx={{ fontSize: 24, color: '#60a5fa' }} />) 
                  : (<Add sx={{ fontSize: 24, color: '#60a5fa' }} />)}
                </div>
              </Button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isProposNousOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <ul className="flex flex-col text-base">
                      <li>
                        <HashLink 
                          smooth 
                          to="/#Qui-sommes-nous" 
                          className="text-blue-400 transition block py-2"
                          onClick={() => {
                            setOpen(false);
                            setIsProposNousOpen(false);
                          }}
                        >
                          Qui sommes-nous
                        </HashLink>
                      </li>
                      <li>
                        <HashLink 
                          smooth 
                          to="/#equipe" 
                          className="text-blue-400 transition block py-2"
                          onClick={() => {
                            setOpen(false);
                            setIsProposNousOpen(false);
                          }}
                        >
                          Équipe
                        </HashLink>
                      </li>
                      <li>
                        <HashLink 
                          smooth 
                          to="/#evenements" 
                          className="text-blue-400 transition block py-2"
                          onClick={() => {
                            setOpen(false);
                            setIsProposNousOpen(false);
                          }}
                        >
                          Événements
                        </HashLink>
                      </li>
                      <li>
                        <HashLink 
                          smooth 
                          to="/#partenaire" 
                          className="text-blue-400 transition block py-2"
                          onClick={() => {
                            setOpen(false);
                            setIsProposNousOpen(false);
                          }}
                        >
                          Partenaires
                        </HashLink>
                      </li>
                      <li>
                        <HashLink 
                          smooth 
                          to="/#benevole" 
                          className="text-blue-400 transition block py-2"
                          onClick={() => {
                            setOpen(false);
                            setIsProposNousOpen(false);
                          }}
                        >
                          Bénévole
                        </HashLink>
                      </li>
                    </ul>
                </div>
              </div>
            </li>
          <li>
            <RouterLink 
              to="/equipePage"
              onClick={() => setOpen(false)}
              className="text-blue-400 hover:text-blue-300 transition"
              style={{ 
                fontSize: '1.125rem', 
                lineHeight: '1.75rem',
                textDecoration: 'none'
              }}
            >
              Équipe
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/evenements"
              onClick={() => setOpen(false)}
              className="text-blue-400 hover:text-blue-300 transition"
              style={{ 
                fontSize: '1.125rem', 
                lineHeight: '1.75rem',
                textDecoration: 'none'
              }}
            >
              Événements
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/benevole"
              onClick={() => setOpen(false)}
              className="text-blue-400 hover:text-blue-300 transition"
              style={{ 
                fontSize: '1.125rem', 
                lineHeight: '1.75rem',
                textDecoration: 'none'
              }}
            >
              Bénévole
            </RouterLink>
          </li>
          </ul>
        </div>
      </Drawer>
    </React.Fragment>
  );
}


function Header() {
  const [isProposNousOpen, setIsProposNousOpen] = useState(false);

  return (
    <header className="w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 relative">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-400">
          <span className="text-white">UdeM</span> Entreprend
        </a>
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="relative flex flex-col items-center">
            <button
              onClick={() => setIsProposNousOpen(!isProposNousOpen)}
              className="flex items-center gap-2 text-white hover:text-blue-400 transition"
            >
              À propos de nous
              <span className="text-blue-400">
                {isProposNousOpen ? (
                  <Remove sx={{ fontSize: 20 }} />
                ) : (
                  <Add sx={{ fontSize: 20 }} />
                )}
              </span>
            </button>
            <div
              className={`absolute top-9 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out ${
                isProposNousOpen
                  ? "max-h-96 opacity-100 mt-2 pointer-events-auto"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
            <ul className="flex flex-col gap-2 text-sm text-white text-center bg-black/60 border border-white/10 rounded-xl shadow-lg p-3 w-44">
              <li>
                <HashLink smooth to="/#Qui-sommes-nous" className="hover:text-blue-400 transition" onClick={() => setIsProposNousOpen(false)}>
                  Qui sommes-nous
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#equipe" className="hover:text-blue-400 transition" onClick={() => setIsProposNousOpen(false)}>
                  Équipe
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#evenements" className="hover:text-blue-400 transition" onClick={() => setIsProposNousOpen(false)}>
                  Événements
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#partenaire" className="hover:text-blue-400 transition" onClick={() => setIsProposNousOpen(false)}>
                  Partenaires
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#benevole" className="hover:text-blue-400 transition" onClick={() => setIsProposNousOpen(false)}>
                  Bénévole
                </HashLink>
              </li>
            </ul>
          </div>
          </li>
          <li><RouterLink to="/equipePage" className="hover:text-blue-400 text-white transition">Équipe</RouterLink></li>
          <li><RouterLink to="/evenements" className="hover:text-blue-400 text-white transition">Événements</RouterLink></li>
          <li><RouterLink to="/benevole" className="text-white hover:text-blue-400 transition">Bénévole</RouterLink></li>
        </ul>
        <div className="md:hidden">
          <DrawerMobileNavigation />
        </div>
      </nav>
    </header>
  );
}

export default Header;
