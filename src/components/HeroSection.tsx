'use client';
import React from 'react';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';

const floatingOrbs = [
  { size: 500, x: '5%', y: '10%', color: '#7C3AED', delay: 0 },
  { size: 400, x: '60%', y: '5%', color: '#06B6D4', delay: 1 },
  { size: 300, x: '80%', y: '50%', color: '#7C3AED', delay: 2 },
  { size: 250, x: '-5%', y: '60%', color: '#06B6D4', delay: 0.5 },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '8+', label: 'Years Experience' },
  { value: '40+', label: 'Expert Engineers' },
];

export default function HeroSection() {
  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  const handleWork = () => {
    const el = document.querySelector('#work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 0 },
      }}
    >
      {/* Animated background orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 2, delay: orb.delay }}
          style={{
            position: 'absolute',
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: orb.color,
            left: orb.x,
            top: orb.y,
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Grid lines background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(124, 58, 237, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center', py: { xs: 8, md: 16 } }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Chip
              label="🚀 Web & Mobile App Development Agency"
              sx={{
                mb: 5,
                px: 2,
                py: 0.5,
                background: 'rgba(124, 58, 237, 0.12)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                color: 'primary.light',
                fontWeight: 600,
                fontSize: '0.875rem',
                height: 'auto',
              }}
            />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.8rem', sm: '3.8rem', md: '5rem', lg: '5.8rem' },
                mb: 3,
                background: 'linear-gradient(135deg, #F1F5F9 30%, #A78BFA 70%, #67E8F9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              We Build Digital
              <Box component="span" sx={{ display: 'block' }}>
                Experiences That
              </Box>
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                paddingBottom: '0.1em',
              }}>
                Matter
              </Box>
            </Typography>
          </motion.div>

          {/* Sub-headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: 650,
                mx: 'auto',
                mb: 5,
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.8,
              }}
            >
              NG Studios crafts high-performance web and mobile applications that scale with your business.
              From MVP to enterprise — we turn your vision into reality.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 10 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={handleContact}
                sx={{ px: 4, py: 1.75, fontSize: '1rem' }}
              >
                Start Your Project
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayCircleOutlinedIcon />}
                onClick={handleWork}
                sx={{ px: 4, py: 1.75, fontSize: '1rem', borderColor: 'rgba(124, 58, 237, 0.4)' }}
              >
                View Our Work
              </Button>
            </Box>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: 4,
                pt: 8,
                mt: 6,
                borderTop: '1px solid rgba(124, 58, 237, 0.15)',
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight={500}>
                    {stat.label}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
