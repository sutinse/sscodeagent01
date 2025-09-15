import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  Button,
  Grid,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  PlayArrow as PlayIcon,
  Code as CodeIcon,
  Visibility as VisibilityIcon,
  Settings as SettingsIcon,
  Star as StarIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';

const Demo: React.FC = () => {
  const theme = useTheme();

  const demoFeatures = [
    {
      title: 'Interactive Components',
      description: 'Explore interactive UI components and their functionality',
      icon: <PlayIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Code Examples',
      description: 'View code snippets and implementation examples',
      icon: <CodeIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Live Preview',
      description: 'See components in action with real-time updates',
      icon: <VisibilityIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Configuration Options',
      description: 'Customize and configure component properties',
      icon: <SettingsIcon fontSize="large" color="primary" />,
    },
  ];

  const demoSteps = [
    'Select a component from the demo gallery',
    'Customize its properties using the controls',
    'View the generated code',
    'Copy the implementation to your project',
  ];

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Paper
        elevation={0}
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.success.dark} 100%)`,
          color: 'white',
          p: 4,
          mb: 4,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          Demo Playground
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
          Interactive demonstrations of components and features
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<PlayIcon />}
          sx={{
            bgcolor: 'white',
            color: theme.palette.success.main,
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.9)',
            },
            px: 4,
            py: 1.5,
          }}
        >
          Start Demo
        </Button>
      </Paper>

      {/* Features Grid */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
          Demo Features
        </Typography>
        <Typography 
          variant="body1" 
          textAlign="center" 
          color="text.secondary" 
          sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
        >
          Discover what you can do with our interactive demo environment.
        </Typography>

        <Grid container spacing={4}>
          {demoFeatures.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* How to Use Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <StarIcon color="primary" />
                How to Use the Demo
              </Typography>
              <List>
                {demoSteps.map((step, index) => (
                  <ListItem key={index} sx={{ pl: 0 }}>
                    <ListItemIcon>
                      <CheckIcon color="success" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={`${index + 1}. ${step}`}
                      primaryTypographyProps={{
                        variant: 'body1',
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: '100%', bgcolor: 'grey.50' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Demo Categories
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    UI Components
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Buttons, forms, cards, navigation elements and more
                  </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Layout Examples
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Responsive grids, flexbox layouts, and page structures
                  </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Interactive Features
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Animations, transitions, and user interactions
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* CTA Section */}
      <Paper elevation={1} sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to Explore?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
          Start experimenting with our components and see what you can build.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="contained" color="secondary" size="large">
            Browse Components
          </Button>
          <Button variant="outlined" color="inherit" size="large">
            View Documentation
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Demo;