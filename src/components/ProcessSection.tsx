'use client';
import React from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description:
      'We start with a deep-dive into your business goals, target audience, and technical requirements. Our strategists craft a clear roadmap aligned with your vision.',
    color: '#7C3AED',
    items: ['Stakeholder Interviews', 'Market Research', 'Technical Scoping', 'Project Roadmap'],
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description:
      "Our designers create stunning, user-centric interfaces backed by UX research. You'll see clickable prototypes before a single line of code is written.",
    color: '#06B6D4',
    items: ['Wireframing', 'UI Design System', 'Interactive Prototypes', 'Usability Testing'],
  },
  {
    step: '03',
    title: 'Development & Engineering',
    description:
      "Our engineers build with modern, scalable architectures. We follow Agile sprints with bi-weekly demos, so you're always in the loop.",
    color: '#10B981',
    items: ['Agile Development', 'Code Reviews', 'API Integration', 'QA & Testing'],
  },
  {
    step: '04',
    title: 'Launch & Growth',
    description:
      'We handle deployment, performance monitoring, and post-launch optimization. Our team stays on to help you grow and iterate after launch.',
    color: '#F59E0B',
    items: ['Deployment & CI/CD', 'Performance Monitoring', 'SEO Optimization', 'Ongoing Support'],
  },
];

function ProcessStep({ step, index, totalSteps }: { step: typeof steps[0]; index: number; totalSteps: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 3, md: 5 },
          mb: index < totalSteps - 1 ? 6 : 0,
          position: 'relative',
        }}
      >
        {/* Step number circle */}
        <Box sx={{ flexShrink: 0 }}>
          <Box
            sx={{
              width: { xs: 56, md: 88 },
              height: { xs: 56, md: 88 },
              borderRadius: '50%',
              background: `${step.color}15`,
              border: `2px solid ${step.color}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1,
              boxShadow: `0 0 32px ${step.color}20`,
            }}
          >
            <Typography
              fontWeight={800}
              sx={{ color: step.color, fontSize: { xs: '1rem', md: '1.3rem' } }}
            >
              {step.step}
            </Typography>
          </Box>
        </Box>

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            background: `${step.color}08`,
            border: `1px solid ${step.color}15`,
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            transition: 'all 0.3s ease',
            '&:hover': {
              background: `${step.color}12`,
              border: `1px solid ${step.color}30`,
              boxShadow: `0 8px 32px ${step.color}15`,
            },
          }}
        >
          <Typography variant="h5" fontWeight={700} mb={1.5} sx={{ color: 'text.primary' }}>
            {step.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8 }}>
            {step.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {step.items.map((item) => (
              <Chip
                key={item}
                label={item}
                size="small"
                sx={{
                  bgcolor: `${step.color}12`,
                  color: step.color,
                  border: `1px solid ${step.color}25`,
                  fontWeight: 500,
                  fontSize: '0.75rem',
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default function ProcessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box id="process" sx={{ py: { xs: 12, md: 20 }, position: 'relative', overflow: 'hidden' }}>
      {/* BG */}
      <Box sx={{
        position: 'absolute', left: '-10%', top: '30%', width: 700, height: 700,
        borderRadius: '50%', background: '#06B6D4', filter: 'blur(140px)', opacity: 0.03, pointerEvents: 'none',
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
              label="Our Process"
              sx={{
                mb: 3, px: 2,
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34D399',
                fontWeight: 600,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2.5,
                background: 'linear-gradient(135deg, #F1F5F9, #34D399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              How We Bring Your
              <Box component="span" sx={{ display: 'block' }}>Vision to Life</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540, mx: 'auto' }}>
              A proven, transparent process that delivers on time and on budget — every time.
            </Typography>
          </Box>
        </motion.div>

        {/* Steps */}
        <Box sx={{ maxWidth: 900, mx: 'auto', position: 'relative' }}>
          {/* Connector line */}
          <Box sx={{
            position: 'absolute',
            left: { xs: 27, md: 43 },
            top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(180deg, #7C3AED, #06B6D4, #10B981, #F59E0B)',
            opacity: 0.2,
          }} />

          {steps.map((step, i) => (
            <ProcessStep key={step.step} step={step} index={i} totalSteps={steps.length} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
