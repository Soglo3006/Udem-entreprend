import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Link from '@mui/joy/Link';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Button from '@mui/joy/Button';

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
          <ul className="flex flex-col gap-8 text-white font-medium text-xl text-center">
            <li className="">
              <div className="flex flex-col">
              <Button variant="plain"
              onClick={() => setIsProposNousOpen(!isProposNousOpen)}
              sx={{ color: '#60a5fa' ,padding: 0,
    minHeight: 'auto',
    margin: 0,}}
              size="lg"
              
              >À propos de nous
              <div className="transition-transform duration-100 ml-2 text-blue-400">
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
              <Link 
                to="/equipePage" 
                color="primary"
                disabled={false}
                level="body-lg"
                onClick={() => setOpen(false)} 
                sx={{ color: '#60a5fa' }}
              >
                Équipe
              </Link>
            </li>
          <li>
              <Link 
                to="/evenements" 
                color="primary"
                disabled={false}
                level="body-lg"
                onClick={() => setOpen(false)} 
                sx={{ color: '#60a5fa' }}
              >
                Événements
              </Link>
            </li>
            <li>
              <Link 
                to="/benevole" 
                color="primary"
                disabled={false}
                level="body-lg"
                onClick={() => setOpen(false)} 
                sx={{ color: '#60a5fa' }}
              >
                Bénévole
              </Link>
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
          <li className="relative">
            <span
              className="hover:text-blue-400 transition cursor-pointer"
              onClick={() => setIsProposNousOpen(!isProposNousOpen)}
            >
              À propos de nous
            </span>
            {isProposNousOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-40 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-2 animate-fade-in">
                <ul className="flex flex-col gap-2 text-sm text-center justify-center">
                  <li>
                    <HashLink smooth to="/#Qui-sommes-nous" className="hover:text-blue-400 transition">
                      Qui sommes-nous
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="/#equipe" className="hover:text-blue-400 transition">
                      Équipe
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="/#evenements" className="hover:text-blue-400 transition">
                      Événements
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="/#partenaire" className="hover:text-blue-400 transition">
                      Partenaires
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="/#benevole" className="hover:text-blue-400 transition">
                      Bénévole
                    </HashLink>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li><Link to="/equipePage" className="hover:text-blue-400 transition">Équipe</Link></li>
          <li><Link to="/evenements" className="hover:text-blue-400 transition">Événements</Link></li>
          <li><Link to="/benevole" className="hover:text-blue-400 transition">Bénévole</Link></li>
        </ul>
        <DrawerMobileNavigation />
      </nav>
    </header>
  );
}

export default Header;
