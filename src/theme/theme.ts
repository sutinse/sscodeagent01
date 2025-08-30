import { createTheme } from '@mui/material/styles';

/**
 * Material UI Theme Configuration
 * 
 * This file contains the main theme configuration for the application.
 * It defines the core design system elements including:
 * - Color palette (primary, secondary, etc.)
 * - Typography settings
 * - Component overrides
 * 
 * This theme can be configured from Figma design system in the future.
 */

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;