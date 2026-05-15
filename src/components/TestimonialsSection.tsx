'use client';
import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Rating, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO, FinFlow Inc.',
    avatar: 'SM',
    rating: 5,
    quote:
      'NextGen Studios delivered beyond our expectations. The banking dashboard they built handles half a million users flawlessly. Their engineering team is world-class.',
    color: '#7C3AED',
    company: 'FinFlow Inc.',
  },
  {
    name: 'Dr. James Okafor',
    role: 'Founder, MedConnect',
    avatar: 'JO',
    rating: 5,
    quote:
      'From day one, they understood the sensitivity of healthcare data. The HIPAA-compliant app they built is reliable, beautiful, and our users love it. Exceptional work.',
    color: '#06B6D4',
    company: 'MedConnect',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Product, ShopVerse',
    avatar: 'PN',
    rating: 5,
    quote:
      'We went from concept to $2M GMV in just 9 months. NextGen Studios\' full-stack expertise and Agile delivery are unmatched. Highly recommend for any serious startup.',
    color: '#10B981',
    company: 'ShopVerse',
  },
  {
    name: 'Marcus Webb',
    role: 'VP Engineering, LogiTrack',
    avatar: 'MW',
    rating: 5,
    quote:
      'The logistics platform they built processes millions of events daily without a hiccup. Their architecture decisions were spot-on for our scale.',
    color: '#F59E0B',
    company: 'LogiTrack',
  },
  {
    name: 'Aisha Al-Farsi',
    role: 'CEO, EduSphere',
    avatar: 'AA',
    rating: 5,
    quote:
      '200K students across 30 countries use the platform NextGen Studios built. The live classes feature just works — even on slow connections. Truly impressive.',
    color: '#EF4444',
    company: 'EduSphere',
  },
  {
    name: 'Tom Reynolds',
    role: 'Product Lead, PropVault',
    avatar: 'TR',
    rating: 5,
    quote:
      'The AR property tours were a game-changer for our business. 4.9 stars on the App Store speaks for itself. NextGen delivered on every promise.',
    color: '#8B5CF6',
    company: 'PropVault',
  },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          position: 'relative',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: `0 20px 60px ${t.color}20`,
            border: `1px solid ${t.color}30`,
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* Quote icon */}
          <Box sx={{
            width: 48, height: 48, borderRadius: '50%',
            background: `${t.color}20`, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            mb: 2.5, color: t.color, border: `1px solid ${t.color}40`,
          }}>
            <FormatQuoteIcon sx={{ fontSize: 28 }} />
          </Box>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2.5, color: 'text.secondary', fontStyle: 'italic' }}>
            "{t.quote}"
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: t.color, fontWeight: 700, width: 48, height: 48 }}>
              {t.avatar}
            </Avatar>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                {t.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {t.role}
              </Typography>
              <Box sx={{ mt: 0.5 }}>
                <Rating value={t.rating} readOnly size="small" sx={{ color: t.color }} />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box id="testimonials" sx={{ py: { xs: 12, md: 20 }, position: 'relative' }}>
      <Box sx={{
        position: 'absolute', right: '5%', bottom: '10%', width: 500, height: 500,
        borderRadius: '50%', background: '#06B6D4', filter: 'blur(120px)', opacity: 0.04, pointerEvents: 'none',
      }} />

      <Container maxWidth="xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
            <Chip
              label="Client Stories"
              sx={{
                mb: 3, px: 2,
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#FCA5A5',
                fontWeight: 600,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2.5,
                background: 'linear-gradient(135deg, #F1F5F9, #FCA5A5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Trusted by Builders
              <Box component="span" sx={{ display: 'block' }}>Around the World</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mx: 'auto' }}>
              Don't just take our word for it — here's what our clients say after shipping with NextGen Studios.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {testimonials.map((t, i) => (
            <Grid key={t.name} size={{ xs: 12, sm: 6, lg: 4 }}>
              <TestimonialCard t={t} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
