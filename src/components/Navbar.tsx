'use client';
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(5, 5, 16, 0.75)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1, px: { xs: 0, md: 2 }, justifyContent: 'space-between' }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Box sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '1rem',
                  color: '#fff',
                  boxShadow: '0 4px 16px rgba(124, 58, 237, 0.5)',
                }}>NG</Box>
                <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
                  NG<Box component="span" sx={{ color: 'primary.main' }}> Studios</Box>
                </Typography>
              </Box>
            </motion.div>

            {/* Desktop Nav */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                  {navLinks.map((link) => (
                    <Button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                        px: 2,
                        py: 1,
                        '&:hover': { color: 'text.primary', bgcolor: 'rgba(124, 58, 237, 0.08)' },
                        transition: 'all 0.2s',
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Box>
              </motion.div>
            )}

            {/* CTA + Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {!isMobile && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleNavClick('#contact')}
                    sx={{ ml: 1 }}
                  >
                    Get Started
                  </Button>
                )}
                {isMobile && (
                  <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'text.primary' }}>
                    <MenuIcon />
                  </IconButton>
                )}
              </Box>
            </motion.div>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: '#0D0D2B',
            borderLeft: '1px solid rgba(124, 58, 237, 0.2)',
            p: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" fontWeight={800}>Menu</Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(link.href)}
                sx={{ borderRadius: 2, mb: 0.5, '&:hover': { bgcolor: 'rgba(124, 58, 237, 0.1)' } }}
              >
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 3 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => handleNavClick('#contact')}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
