'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Button, Divider, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import DraftsIcon from '@mui/icons-material/Drafts';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const footerLinks = {
  Services: [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Backend & APIs',
    'Cloud & DevOps',
    'Digital Strategy',
  ],
  Company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Press Kit', 'Partner Program'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
};

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(124, 58, 237, 0.15)',
      }}
    >
      {/* CTA Banner */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)',
          borderBottom: '1px solid rgba(124, 58, 237, 0.1)',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{
          position: 'absolute', left: '20%', top: '-40%', width: 400, height: 400,
          borderRadius: '50%', background: '#7C3AED', filter: 'blur(100px)', opacity: 0.08, pointerEvents: 'none',
        }} />
        <Box sx={{
          position: 'absolute', right: '15%', bottom: '-30%', width: 350, height: 350,
          borderRadius: '50%', background: '#06B6D4', filter: 'blur(80px)', opacity: 0.08, pointerEvents: 'none',
        }} />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.8rem' },
                mb: 2.5,
                background: 'linear-gradient(135deg, #F1F5F9, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Have a Project in Mind?
              <Box component="span" sx={{ display: 'block' }}>Let's Make It Real.</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 480, mx: 'auto' }}>
              Join 150+ companies that trusted NG Studios to build their digital future.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              sx={{ px: 5, py: 1.75, fontSize: '1rem' }}
            >
              Start Your Project
            </Button>
          </Container>
        </motion.div>
      </Box>

      {/* Footer Links */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            {/* Brand column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                <Box sx={{
                  width: 36, height: 36, borderRadius: '10px',
                  background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontSize: '1rem', color: '#fff',
                  boxShadow: '0 4px 16px rgba(124, 58, 237, 0.5)',
                }}>NG</Box>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  NG<Box component="span" sx={{ color: 'primary.main' }}> Studios</Box>
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3, maxWidth: 300 }}>
                Building exceptional digital products that scale. From MVPs to enterprise platforms —
                we turn ideas into reality.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[
                  { icon: <LinkedInIcon />, label: 'LinkedIn' },
                  { icon: <TwitterIcon />, label: 'Twitter' },
                  { icon: <GitHubIcon />, label: 'GitHub' },
                  { icon: <DraftsIcon />, label: 'Email' },
                ].map((social) => (
                  <IconButton
                    key={social.label}
                    size="small"
                    aria-label={social.label}
                    sx={{
                      color: 'text.secondary',
                      border: '1px solid rgba(124, 58, 237, 0.2)',
                      borderRadius: '10px',
                      width: 38, height: 38,
                      '&:hover': {
                        color: 'primary.light',
                        bgcolor: 'rgba(124, 58, 237, 0.1)',
                        border: '1px solid rgba(124, 58, 237, 0.4)',
                      },
                      transition: 'all 0.2s',
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <Grid key={category} size={{ xs: 6, sm: 4, md: 2.67 }}>
                <Typography
                  variant="overline"
                  sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: '0.1em', mb: 2.5, display: 'block' }}
                >
                  {category}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                  {links.map((link) => (
                    <Typography
                      key={link}
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        cursor: 'pointer',
                        transition: 'color 0.2s',
                        '&:hover': { color: 'primary.light' },
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 6, borderColor: 'rgba(124, 58, 237, 0.1)' }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} NG Studios. All rights reserved. |{' '}
              <Box component="a" href="https://ngstudios.online" sx={{ color: 'primary.light', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>ngstudios.online</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Built with ❤️ using Next.js & Material UI
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
