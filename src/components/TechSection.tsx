'use client';
import React from 'react';
import { Box, Container, Typography, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techCategories = [
  {
    category: 'Frontend',
    color: '#7C3AED',
    techs: [
      { name: 'Next.js', icon: '▲' },
      { name: 'React', icon: '⚛' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Vue.js', icon: '🟢' },
    ],
  },
  {
    category: 'Mobile',
    color: '#06B6D4',
    techs: [
      { name: 'Flutter', icon: '🦋' },
      { name: 'React Native', icon: '📱' },
      { name: 'iOS / Swift', icon: '🍎' },
      { name: 'Kotlin', icon: '🤖' },
    ],
  },
  {
    category: 'Backend',
    color: '#10B981',
    techs: [
      { name: 'Node.js', icon: '🟩' },
      { name: 'Python / Django', icon: '🐍' },
      { name: 'GraphQL', icon: '◈' },
      { name: 'REST APIs', icon: '🔗' },
    ],
  },
  {
    category: 'Database',
    color: '#F59E0B',
    techs: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '⚡' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: '#EF4444',
    techs: [
      { name: 'AWS', icon: '☁' },
      { name: 'Google Cloud', icon: '🌐' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸' },
    ],
  },
  {
    category: 'Design & Tools',
    color: '#8B5CF6',
    techs: [
      { name: 'Figma', icon: '🎨' },
      { name: 'Storybook', icon: '📖' },
      { name: 'Git / GitHub', icon: '🐙' },
      { name: 'Vercel / CI', icon: '🚀' },
    ],
  },
];

function TechCategoryCard({ cat, index }: { cat: typeof techCategories[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Box
        sx={{
          p: 3.5,
          borderRadius: 3,
          background: `${cat.color}08`,
          border: `1px solid ${cat.color}20`,
          height: '100%',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: `${cat.color}12`,
            border: `1px solid ${cat.color}40`,
            transform: 'translateY(-4px)',
            boxShadow: `0 12px 40px ${cat.color}15`,
          },
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: cat.color, fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', mb: 2.5, display: 'block' }}
        >
          {cat.category}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {cat.techs.map((tech) => (
            <Box
              key={tech.name}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                p: 1.25,
                borderRadius: 2,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.2s',
                '&:hover': { background: `${cat.color}10`, border: `1px solid ${cat.color}20` },
              }}
            >
              <Typography sx={{ fontSize: '1.1rem', lineHeight: 1, minWidth: 24, textAlign: 'center' }}>
                {tech.icon}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {tech.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}

export default function TechSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box id="tech" sx={{ py: { xs: 12, md: 20 }, position: 'relative' }}>
      {/* BG glow */}
      <Box sx={{
        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
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
              label="Tech Stack"
              sx={{
                mb: 3, px: 2,
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                color: '#FCD34D',
                fontWeight: 600,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2.5,
                background: 'linear-gradient(135deg, #F1F5F9, #FCD34D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Built With Best-in-Class
              <Box component="span" sx={{ display: 'block' }}>Technologies</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540, mx: 'auto' }}>
              We use the most modern, battle-tested tools to build software that's fast, scalable, and maintainable.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {techCategories.map((cat, i) => (
            <Grid key={cat.category} size={{ xs: 12, sm: 6, md: 4 }}>
              <TechCategoryCard cat={cat} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
