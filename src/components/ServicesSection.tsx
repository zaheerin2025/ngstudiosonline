'use client';
import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WebIcon from '@mui/icons-material/Web';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloudIcon from '@mui/icons-material/Cloud';
import ApiIcon from '@mui/icons-material/Api';
import BrushIcon from '@mui/icons-material/Brush';

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 36 }} />,
    title: 'Web Development',
    description:
      'Custom, high-performance web applications built with modern frameworks. From landing pages to complex SaaS platforms, we deliver pixel-perfect, scalable solutions.',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript'],
    gradient: 'linear-gradient(135deg, #7C3AED22, #7C3AED08)',
    accent: '#7C3AED',
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 36 }} />,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android. Built with Flutter and React Native for maximum reach.',
    tags: ['Flutter', 'React Native', 'iOS', 'Android'],
    gradient: 'linear-gradient(135deg, #06B6D422, #06B6D408)',
    accent: '#06B6D4',
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 36 }} />,
    title: 'UI/UX Design',
    description:
      'Stunning designs that convert. We craft intuitive user experiences backed by research, prototyping, and a deep understanding of your target audience.',
    tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    gradient: 'linear-gradient(135deg, #F59E0B22, #F59E0B08)',
    accent: '#F59E0B',
  },
  {
    icon: <CloudIcon sx={{ fontSize: 36 }} />,
    title: 'Cloud & DevOps',
    description:
      'Robust cloud infrastructure, CI/CD pipelines, and DevOps solutions that ensure your applications are always fast, secure, and highly available.',
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
    gradient: 'linear-gradient(135deg, #10B98122, #10B98108)',
    accent: '#10B981',
  },
  {
    icon: <ApiIcon sx={{ fontSize: 36 }} />,
    title: 'Backend & API Development',
    description:
      'Scalable, secure server-side systems and RESTful/GraphQL APIs. We design architectures that handle millions of requests without breaking a sweat.',
    tags: ['Node.js', 'Python', 'GraphQL', 'REST APIs'],
    gradient: 'linear-gradient(135deg, #EF444422, #EF444408)',
    accent: '#EF4444',
  },
  {
    icon: <BrushIcon sx={{ fontSize: 36 }} />,
    title: 'Digital Transformation',
    description:
      'Modernize legacy systems and digitize business processes. We guide organizations through end-to-end digital transformation with minimal disruption.',
    tags: ['Consulting', 'Migration', 'Integration', 'Strategy'],
    gradient: 'linear-gradient(135deg, #8B5CF622, #8B5CF608)',
    accent: '#8B5CF6',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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
          background: service.gradient.replace('22', '33').replace('08', '11'),
          backdropFilter: 'blur(10px)',
          border: `1px solid ${service.accent}33`,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            border: `1px solid ${service.accent}44`,
            boxShadow: `0 20px 60px ${service.accent}22`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${service.accent}22, ${service.accent}05)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: service.accent,
              mb: 3,
              border: `1px solid ${service.accent}44`,
            }}
          >
            {service.icon}
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            {service.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
            {service.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {service.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  bgcolor: `${service.accent}15`,
                  color: service.accent,
                  border: `1px solid ${service.accent}30`,
                  fontWeight: 500,
                  fontSize: '0.75rem',
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box id="services" sx={{ py: { xs: 12, md: 20 }, position: 'relative' }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
            <Chip
              label="Our Services"
              sx={{
                mb: 3,
                px: 2,
                background: 'rgba(124, 58, 237, 0.1)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                color: 'primary.light',
                fontWeight: 600,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2.5,
                background: 'linear-gradient(135deg, #F1F5F9, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Everything You Need to
              <Box component="span" sx={{ display: 'block' }}>Build & Grow</Box>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 560, mx: 'auto', lineHeight: 1.8 }}
            >
              We offer a comprehensive range of digital services to take your product
              from concept to global scale.
            </Typography>
          </Box>
        </motion.div>

        {/* Services Grid */}
        <Grid container spacing={3}>
          {services.map((service, i) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <ServiceCard service={service} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
