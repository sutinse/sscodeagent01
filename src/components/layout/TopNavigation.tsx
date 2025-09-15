import React from 'react';
import {
  Box,
  Tabs,
  Tab,
  Paper,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Person as PersonIcon,
  PlayArrow as DemoIcon,
} from '@mui/icons-material';

const TopNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine current tab based on pathname
  const getCurrentTab = () => {
    switch (location.pathname) {
      case '/':
        return 0;
      case '/about':
        return 1;
      case '/user':
        return 2;
      case '/demo':
        return 3;
      default:
        return 0;
    }
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/about');
        break;
      case 2:
        navigate('/user');
        break;
      case 3:
        navigate('/demo');
        break;
    }
  };

  return (
    <Paper 
      elevation={1} 
      sx={{ 
        borderRadius: 0,
        backgroundColor: '#f5f5f5'
      }}
    >
      <Box sx={{ px: 2 }}>
        <Tabs
          value={getCurrentTab()}
          onChange={handleTabChange}
          aria-label="top navigation tabs"
          textColor="primary"
          indicatorColor="primary"
          sx={{
            '& .MuiTab-root': {
              minHeight: 56,
              textTransform: 'none',
              fontWeight: 500,
            }
          }}
        >
          <Tab
            icon={<HomeIcon />}
            iconPosition="start"
            label="Home"
            sx={{ mr: 1 }}
          />
          <Tab
            icon={<InfoIcon />}
            iconPosition="start"
            label="About"
            sx={{ mr: 1 }}
          />
          <Tab
            icon={<PersonIcon />}
            iconPosition="start"
            label="User"
            sx={{ mr: 1 }}
          />
          <Tab
            icon={<DemoIcon />}
            iconPosition="start"
            label="Demo"
            sx={{ mr: 1 }}
          />
        </Tabs>
      </Box>
    </Paper>
  );
};

export default TopNavigation;