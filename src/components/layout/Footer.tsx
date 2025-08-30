import React from 'react';
import {
  Box,
  Typography,
  Container,
  Link,
  Paper,
  useTheme,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Paper 
      component="footer"
      elevation={3}
      sx={{
        mt: 'auto',
        backgroundColor: theme.palette.grey[100],
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 3 }}>
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {/* Company Info */}
            <Box>
              <Typography variant="h6" color="text.primary" gutterBottom>
                SSCodeAgent01
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A modern React application built with Material-UI, 
                React Router v7, and TypeScript.
              </Typography>
            </Box>

            {/* Quick Links */}
            <Box>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Link 
                  href="/" 
                  color="inherit" 
                  variant="body2" 
                  sx={{ mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  color="inherit" 
                  variant="body2" 
                  sx={{ mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  About
                </Link>
                <Link 
                  href="/user" 
                  color="inherit" 
                  variant="body2" 
                  sx={{ mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  User
                </Link>
              </Box>
            </Box>

            {/* Contact & Social */}
            <Box>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Connect
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <GitHubIcon sx={{ mr: 1, fontSize: 20 }} />
                <Link 
                  href="https://github.com/sutinse/sscodeagent01" 
                  color="inherit" 
                  variant="body2"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  GitHub
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
                <Link 
                  href="mailto:contact@sscodeagent01.com" 
                  color="inherit" 
                  variant="body2"
                  sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Contact Us
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Copyright */}
          <Box
            sx={{
              borderTop: `1px solid ${theme.palette.divider}`,
              pt: 2,
              mt: 3,
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {currentYear} SSCodeAgent01. Built with React 19, TypeScript, and Material-UI.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;