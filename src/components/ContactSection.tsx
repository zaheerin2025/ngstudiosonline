'use client';
import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, TextField, Button,
  Chip, MenuItem, Snackbar, Alert, CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';

const services = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Backend & API',
  'Cloud & DevOps',
  'Digital Transformation',
  'Not Sure Yet',
];

const contactInfo = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'hello@ngstudios.online',
    color: '#7C3AED',
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+92 300 000 0000',
    color: '#06B6D4',
  },
  {
    icon: <LocationOnIcon />,
    label: 'Location',
    value: 'Pakistan — Remote Worldwide',
    color: '#10B981',
  },
  {
    icon: <ScheduleIcon />,
    label: 'Response Time',
    value: 'Within 24 hours',
    color: '#F59E0B',
  },
];

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: '', budget: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' });
    }, 1800);
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      background: 'rgba(13, 13, 43, 0.6)',
      backdropFilter: 'blur(10px)',
      '& fieldset': { borderColor: 'rgba(124, 58, 237, 0.2)' },
      '&:hover fieldset': { borderColor: 'rgba(124, 58, 237, 0.4)' },
      '&.Mui-focused fieldset': { borderColor: '#7C3AED' },
    },
    '& .MuiInputLabel-root': { color: 'text.secondary' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#A78BFA' },
  };

  return (
    <Box id="contact" sx={{ py: { xs: 12, md: 20 }, position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <Box sx={{
        position: 'absolute', left: '50%', bottom: 0, transform: 'translateX(-50%)',
        width: 900, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
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
              label="Let's Talk"
              sx={{
                mb: 3, px: 2,
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
              Start Building Something
              <Box component="span" sx={{ display: 'block' }}>Amazing Today</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mx: 'auto' }}>
              Share your project details and we'll get back to you within 24 hours with a tailored proposal.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box sx={{ mb: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                  Ready to launch your
                  <Box component="span" sx={{ color: 'primary.light' }}> next project?</Box>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  Whether you're a startup with a bold idea or an enterprise looking to modernize,
                  we have the team and expertise to deliver.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {contactInfo.map((info) => (
                  <Box
                    key={info.label}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      p: 2.5,
                      borderRadius: 3,
                      background: `${info.color}08`,
                      border: `1px solid ${info.color}20`,
                      transition: 'all 0.2s',
                      '&:hover': { background: `${info.color}12`, border: `1px solid ${info.color}35` },
                    }}
                  >
                    <Box sx={{
                      color: info.color, mt: 0.2, flexShrink: 0,
                      width: 36, height: 36, borderRadius: '10px',
                      background: `${info.color}15`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        {info.label}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500, mt: 0.25 }}>
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  background: 'rgba(13, 13, 43, 0.5)',
                  border: '1px solid rgba(124, 58, 237, 0.15)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth required
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth required
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Company / Startup"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth select required
                      label="Service Needed"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      sx={inputSx}
                    >
                      {services.map((s) => (
                        <MenuItem key={s} value={s}>{s}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth select
                      label="Estimated Budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      sx={inputSx}
                    >
                      {['< $10K', '$10K – $50K', '$50K – $100K', '$100K+', 'Let\'s Discuss'].map((b) => (
                        <MenuItem key={b} value={b}>{b}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth required multiline rows={4}
                      label="Tell Us About Your Project"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                      sx={{ py: 1.75, fontSize: '1rem' }}
                    >
                      {loading ? 'Sending...' : 'Send My Project Brief'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={success}
        autoHideDuration={5000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSuccess(false)}>
          🚀 Message sent! We'll get back to you within 24 hours.
        </Alert>
      </Snackbar>
    </Box>
  );
}
