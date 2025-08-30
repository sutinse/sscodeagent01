import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  Chip,
  Avatar,
  useTheme,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  Build as BuildIcon,
  Code as CodeIcon,
  Speed as SpeedIcon,
  Check as CheckIcon,
} from '@mui/icons-material';

const About: React.FC = () => {
  const theme = useTheme();

  const technologies = [
    'React 19',
    'TypeScript',
    'React Router v7',
    'Material-UI',
    'Vite',
    'ESLint',
  ];

  const milestones = [
    {
      title: 'Project Initialization',
      description: 'Set up React 19 with TypeScript and Vite',
      icon: <BuildIcon />,
    },
    {
      title: 'Layout Implementation',
      description: 'Created responsive layout with header, navigation, and sidebar components',
      icon: <CodeIcon />,
    },
    {
      title: 'Routing Setup',
      description: 'Configured React Router v7 in client-mode for seamless navigation',
      icon: <SpeedIcon />,
    },
    {
      title: 'Material-UI Integration',
      description: 'Implemented Material Design components for consistent UI',
      icon: <CheckIcon />,
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Paper
        elevation={0}
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
          color: 'white',
          p: 4,
          mb: 4,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          About This Project
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Learn about the technologies and approach behind SSCodeAgent01
        </Typography>
      </Paper>

      {/* Overview Section */}
      <Box sx={{ mb: 6, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Project Overview
          </Typography>
          <Typography variant="body1" paragraph>
            SSCodeAgent01 is a modern React application that demonstrates best practices 
            in web development using the latest technologies. This project showcases a 
            comprehensive layout system with multiple navigation options, responsive design, 
            and a clean, professional user interface.
          </Typography>
          <Typography variant="body1" paragraph>
            The application is built with React 19, providing the latest features and 
            performance improvements. TypeScript ensures type safety and better developer 
            experience, while Material-UI delivers a consistent and beautiful design system.
          </Typography>
          <Typography variant="body1" paragraph>
            React Router v7 is configured in client-mode to provide seamless navigation 
            between pages, creating a smooth single-page application experience.
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Key Features
        </Typography>
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.main,
                width: 56,
                height: 56,
                mx: 'auto',
                mb: 2,
              }}
            >
              <BuildIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              Responsive Layout
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Adaptive design that works on all screen sizes
            </Typography>
          </Card>

          <Card sx={{ textAlign: 'center', p: 2 }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.secondary.main,
                width: 56,
                height: 56,
                mx: 'auto',
                mb: 2,
              }}
            >
              <CodeIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              Type Safety
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Full TypeScript support for reliable code
            </Typography>
          </Card>

          <Card sx={{ textAlign: 'center', p: 2 }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.success.main,
                width: 56,
                height: 56,
                mx: 'auto',
                mb: 2,
              }}
            >
              <SpeedIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              Fast Performance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Optimized with Vite for lightning-fast builds
            </Typography>
          </Card>

          <Card sx={{ textAlign: 'center', p: 2 }}>
            <Avatar
              sx={{
                bgcolor: theme.palette.warning.main,
                width: 56,
                height: 56,
                mx: 'auto',
                mb: 2,
              }}
            >
              <CheckIcon />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              Modern UI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Material Design components for consistency
            </Typography>
          </Card>
        </Box>
      </Box>

      {/* Development Timeline */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Development Timeline
        </Typography>
        <Timeline position="alternate">
          {milestones.map((milestone, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  {milestone.icon}
                </TimelineDot>
                {index < milestones.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  {milestone.title}
                </Typography>
                <Typography color="text.secondary">
                  {milestone.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
};

export default About;