import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
  Avatar,
  useTheme,
} from '@mui/material';
import {
  Code as CodeIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Widgets as WidgetsIcon,
} from '@mui/icons-material';

const Home: React.FC = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <CodeIcon fontSize="large" color="primary" />,
      title: 'Modern Development',
      description: 'Built with React 19, TypeScript, and the latest web technologies for optimal performance and developer experience.',
    },
    {
      icon: <SpeedIcon fontSize="large" color="primary" />,
      title: 'Fast & Responsive',
      description: 'Optimized for speed with Vite bundling and responsive design that works on all devices.',
    },
    {
      icon: <SecurityIcon fontSize="large" color="primary" />,
      title: 'Type Safety',
      description: 'Full TypeScript support ensures code reliability and better development experience.',
    },
    {
      icon: <WidgetsIcon fontSize="large" color="primary" />,
      title: 'Material Design',
      description: 'Beautiful and consistent UI components following Material Design principles.',
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          p: 6,
          mb: 4,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Avatar
          sx={{
            bgcolor: 'white',
            color: theme.palette.primary.main,
            width: 80,
            height: 80,
            fontSize: '2rem',
            fontWeight: 'bold',
            mx: 'auto',
            mb: 3,
          }}
        >
          SS
        </Avatar>
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          Welcome to SSCodeAgent01
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          A modern React application showcasing best practices in web development
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: 'white',
            color: theme.palette.primary.main,
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.9)',
            },
            px: 4,
            py: 1.5,
          }}
        >
          Get Started
        </Button>
      </Paper>

      {/* Features Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Key Features
        </Typography>
        <Typography 
          variant="body1" 
          textAlign="center" 
          color="text.secondary" 
          sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
        >
          Discover the powerful features that make this application stand out in modern web development.
        </Typography>

        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button size="small" variant="outlined">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Stats Section */}
      <Paper elevation={1} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Application Statistics
        </Typography>
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 4,
            mt: 2,
            textAlign: 'center',
          }}
        >
          <Box>
            <Typography variant="h3" color="primary" fontWeight="bold">
              React 19
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Latest React Version
            </Typography>
          </Box>
          <Box>
            <Typography variant="h3" color="primary" fontWeight="bold">
              TypeScript
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Type-Safe Development
            </Typography>
          </Box>
          <Box>
            <Typography variant="h3" color="primary" fontWeight="bold">
              Material-UI
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Beautiful Components
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;