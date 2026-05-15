'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const projects = [
  {
    title: 'FinFlow – Banking Dashboard',
    category: 'Web Application',
    description:
      'A next-generation banking dashboard with real-time analytics, AI-powered insights, and seamless payment workflows for 500k+ active users.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)',
    metric: '500K+ Users',
  },
  {
    title: 'MedConnect – Healthcare App',
    category: 'Mobile Application',
    description:
      'A HIPAA-compliant telemedicine platform connecting patients with doctors via video, chat, and prescriptions. Launched on iOS and Android.',
    tags: ['Flutter', 'Firebase', 'WebRTC', 'Stripe'],
    color: '#06B6D4',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #0E7490 100%)',
    metric: '#1 Health App',
  },
  {
    title: 'ShopVerse – E-Commerce Platform',
    category: 'Web + Mobile',
    description:
      'Full-stack e-commerce ecosystem with a vendor marketplace, AI-powered recommendations, and multi-currency checkout. Processing $2M+ monthly.',
    tags: ['React', 'GraphQL', 'Redis', 'Elasticsearch'],
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #065F46 100%)',
    metric: '$2M+ Monthly GMV',
  },
  {
    title: 'LogiTrack – Supply Chain SaaS',
    category: 'Enterprise SaaS',
    description:
      'End-to-end logistics management platform with live GPS tracking, predictive analytics, and ERP integrations for Fortune 500 clients.',
    tags: ['React', 'Python', 'Kafka', 'GCP'],
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #92400E 100%)',
    metric: 'Fortune 500 Client',
  },
  {
    title: 'EduSphere – EdTech Platform',
    category: 'Web Application',
    description:
      'Interactive online learning platform with live classes, AI tutoring, and gamification. Serving 200K+ students across 30 countries.',
    tags: ['Next.js', 'Socket.io', 'MongoDB', 'Vercel'],
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #7F1D1D 100%)',
    metric: '200K+ Students',
  },
  {
    title: 'PropVault – Real Estate App',
    category: 'Mobile Application',
    description:
      'AR-powered property discovery app with virtual tours, mortgage calculator, and instant agent connect. 4.9 ⭐ on App Store.',
    tags: ['React Native', 'AR Kit', 'Node.js', 'Maps API'],
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #4C1D95 100%)',
    metric: '4.9 ⭐ App Store',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card
        sx={{
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: `0 24px 64px ${project.color}30`,
            '& .project-overlay': { opacity: 1 },
            '& .project-tag-row': { transform: 'translateY(0)', opacity: 1 },
          },
        }}
      >
        {/* Gradient Header */}
        <Box
          sx={{
            height: 200,
            background: project.gradient,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Abstract mesh pattern */}
          <Box sx={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.15) 0%, transparent 60%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(0,0,0,0.2) 0%, transparent 60%)',
            mixBlendMode: 'overlay',
          }} />
          <Typography variant="h6" sx={{ fontWeight: 900, color: 'rgba(255,255,255,0.4)', fontSize: '4.5rem', letterSpacing: '-0.05em', userSelect: 'none', mixBlendMode: 'overlay' }}>
            {project.title.charAt(0)}{project.title.split(' ')[0].charAt(1)}
          </Typography>
          {/* Metric badge */}
          <Chip
            label={project.metric}
            size="small"
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              bgcolor: 'rgba(0,0,0,0.4)',
              color: '#fff',
              fontWeight: 700,
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
            }}
          />
          <Chip
            label={project.category}
            size="small"
            sx={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              bgcolor: 'rgba(0,0,0,0.4)',
              color: '#fff',
              fontWeight: 500,
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
            }}
          />
        </Box>

        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.75 }}>
            {project.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  bgcolor: `${project.color}15`,
                  color: project.color,
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  border: `1px solid ${project.color}30`,
                  px: 0.5,
                  py: 1.5,
                  height: 28,
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function WorkSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box id="work" sx={{ py: { xs: 12, md: 20 }, position: 'relative' }}>
      {/* Background accent */}
      <Box sx={{
        position: 'absolute', right: 0, top: '20%', width: 600, height: 600,
        borderRadius: '50%', background: '#7C3AED', filter: 'blur(120px)', opacity: 0.04, pointerEvents: 'none',
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
              label="Our Work"
              sx={{
                mb: 3, px: 2,
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                color: 'secondary.light',
                fontWeight: 600,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2.5,
                background: 'linear-gradient(135deg, #F1F5F9, #67E8F9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Products We're Proud Of
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540, mx: 'auto' }}>
              A curated selection of projects that showcase our expertise across industries and platforms.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {projects.map((project, i) => (
            <Grid key={project.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <ProjectCard project={project} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
