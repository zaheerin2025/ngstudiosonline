'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7C3AED',
      light: '#A78BFA',
      dark: '#5B21B6',
    },
    secondary: {
      main: '#06B6D4',
      light: '#67E8F9',
      dark: '#0891B2',
    },
    background: {
      default: '#050510',
      paper: '#0D0D2B',
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    },
    divider: 'rgba(124, 58, 237, 0.15)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.75,
    },
    body2: {
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '10px',
          padding: '12px 28px',
          fontSize: '0.95rem',
          letterSpacing: '0.01em',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
          boxShadow: '0 4px 24px rgba(124, 58, 237, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
            boxShadow: '0 8px 32px rgba(124, 58, 237, 0.6)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
        },
        outlinedPrimary: {
          borderColor: 'rgba(124, 58, 237, 0.5)',
          '&:hover': {
            borderColor: '#7C3AED',
            backgroundColor: 'rgba(124, 58, 237, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(13, 13, 43, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(124, 58, 237, 0.12)',
          borderRadius: '16px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
