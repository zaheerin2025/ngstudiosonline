'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Chip,
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SendIcon from '@mui/icons-material/Send';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const reasons = [
  'Privacy Concerns',
  'No longer using the app',
  'Found a better alternative',
  'Too many advertisements',
  'Account created by mistake',
  'Other',
];

export default function DeleteAccountPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    additionalNotes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed) {
      setErrorMsg('You must check the confirmation box to proceed.');
      return;
    }
    setLoading(true);
    setErrorMsg(null);
    try {
      const response = await fetch('https://formsubmit.co/ajax/zaheerin2024@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Digital Property Agent - Account Deletion Request',
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Reason: form.reason,
          'Additional Notes': form.additionalNotes,
          Confirmed: 'Yes',
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', reason: '', additionalNotes: '' });
        setConfirmed(false);
      } else {
        setErrorMsg('Could not submit the request. Please try again or email zaheerin2024@gmail.com directly.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMsg('A network error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
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
    <>
      <Navbar />
      <Box
        sx={{
          py: { xs: 14, md: 22 },
          position: 'relative',
          bgcolor: 'background.default',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Background blobs */}
        <Box
          sx={{
            position: 'absolute',
            left: '10%',
            top: '10%',
            width: 450,
            height: 450,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            right: '10%',
            bottom: '10%',
            width: 450,
            height: 450,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg">
          {/* Header Title */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Chip
                label="Data Privacy & Safety"
                color="secondary"
                sx={{
                  mb: 2.5,
                  px: 2,
                  background: 'rgba(6, 182, 212, 0.1)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  color: 'secondary.light',
                  fontWeight: 600,
                }}
              />
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontSize: { xs: '2.2rem', md: '3.6rem' },
                  mb: 3,
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #F1F5F9 30%, #A78BFA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Account Deletion Request
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ maxWidth: 650, mx: 'auto', lineHeight: 1.8, fontSize: '1.05rem' }}
              >
                For users of the <strong>Digital Property Agent</strong> mobile app by <strong>NG Studios</strong>. 
                Submit a request to permanently delete your account and all associated personal data.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={6}>
            {/* Left Column: Instructions and Data Safety Info */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {/* Deletion Steps */}
                  <Card sx={{ bgcolor: 'background.paper', p: 1 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                        <DeleteForeverIcon sx={{ color: 'primary.light' }} />
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                          Steps to Delete Account
                        </Typography>
                      </Box>
                      <List sx={{ p: 0 }}>
                        {[
                          'Submit your registered name, email, and phone number in the request form on this page.',
                          'Alternatively, email us directly at zaheerin2024@gmail.com with your request details.',
                          'Our team will verify account ownership by sending a confirmation code or calling you.',
                          'Once verified, your account, credentials, and property listings are permanently deleted.',
                        ].map((step, idx) => (
                          <ListItem key={idx} sx={{ alignItems: 'flex-start', px: 0, py: 1.25 }}>
                            <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                              <CheckCircleIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={step}
                              slotProps={{
                                primary: {
                                  style: { fontSize: '0.95rem', color: '#94A3B8', lineHeight: 1.6 },
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>

                  {/* Data Policy Info */}
                  <Card sx={{ bgcolor: 'background.paper', p: 1 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                        <InfoIcon sx={{ color: 'secondary.light' }} />
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                          Data Types & Retention Policy
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7 }}>
                        Consistent with Google Play Store rules and user privacy guidelines, we process account deletion as follows:
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.light', mb: 0.5 }}>
                          Data that IS permanently deleted:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ pl: 2, borderLeft: '2px solid #7C3AED', mb: 2 }}>
                          • <strong>Personal Profile Details:</strong> Full Name, Email address, Phone number, City, and Area Details.<br />
                          • <strong>App Listings & Content:</strong> Property advertisements, description, price, contact numbers, and all uploaded property photos.<br />
                          • <strong>App Credentials:</strong> Your Firebase Authentication credentials and credentials stored for logging in.
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'secondary.light', mb: 0.5 }}>
                          Data that is temporarily kept (Retention):
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ pl: 2, borderLeft: '2px solid #06B6D4' }}>
                          • We do not keep any backup personal data after verification. Any technical log data stored automatically (Firebase Analytics or Crashlytics) is fully anonymized and does not contain personal identifiers.
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                          Timeframe:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ pl: 2, borderLeft: '2px solid #94A3B8' }}>
                          • Your account data deletion request is processed and completed within <strong>7 days</strong> of verifying ownership.
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            </Grid>

            {/* Right Column: Request Form */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
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
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <ReportProblemIcon sx={{ color: '#F59E0B' }} />
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      Submit Deletion Request
                    </Typography>
                  </Box>

                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        required
                        label="Full Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        sx={inputSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label="Registered Email"
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
                        required
                        label="Registered Phone"
                        name="phone"
                        placeholder="e.g., +92 300 1234567"
                        value={form.phone}
                        onChange={handleChange}
                        sx={inputSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        select
                        label="Reason for Deletion"
                        name="reason"
                        value={form.reason}
                        onChange={handleChange}
                        sx={inputSx}
                      >
                        {reasons.map((r) => (
                          <MenuItem key={r} value={r}>
                            {r}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Additional Notes / Details (Optional)"
                        name="additionalNotes"
                        value={form.additionalNotes}
                        onChange={handleChange}
                        sx={inputSx}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={confirmed}
                            onChange={(e) => setConfirmed(e.target.checked)}
                            sx={{
                              color: 'rgba(124, 58, 237, 0.3)',
                              '&.Mui-checked': { color: '#7C3AED' },
                            }}
                          />
                        }
                        label={
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                            I confirm that I want to delete my Digital Property Agent account and all associated data. I understand this action is permanent.
                          </Typography>
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={loading || !confirmed}
                        endIcon={
                          loading ? (
                            <CircularProgress size={20} color="inherit" />
                          ) : (
                            <SendIcon />
                          )
                        }
                        sx={{ py: 1.75, fontSize: '1rem', mt: 1 }}
                      >
                        {loading ? 'Submitting...' : 'Submit Request'}
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
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="success" variant="filled" onClose={() => setSuccess(false)}>
            🚀 Account deletion request submitted! Our team will contact you soon to verify.
          </Alert>
        </Snackbar>

        <Snackbar
          open={!!errorMsg}
          autoHideDuration={6000}
          onClose={() => setErrorMsg(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="error" variant="filled" onClose={() => setErrorMsg(null)}>
            ❌ {errorMsg}
          </Alert>
        </Snackbar>
      </Box>
      <Footer />
    </>
  );
}
