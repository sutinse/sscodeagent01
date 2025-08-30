import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  useTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';

interface HeaderProps {
  onLeftDrawerToggle: () => void;
  onRightDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLeftDrawerToggle, onRightDrawerToggle }) => {
  const theme = useTheme();

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#1976d2'
      }}
    >
      <Toolbar>
        {/* Left Menu Toggle */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onLeftDrawerToggle}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Avatar
          sx={{
            bgcolor: 'white',
            color: '#1976d2',
            width: 40,
            height: 40,
            mr: 2,
            fontWeight: 'bold'
          }}
        >
          SS
        </Avatar>

        {/* Title */}
        <Typography 
          variant="h6" 
          noWrap 
          component="div" 
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          SSCodeAgent01
        </Typography>

        {/* Right Side Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="toggle right sidebar"
            onClick={onRightDrawerToggle}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;