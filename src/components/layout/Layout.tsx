import React from 'react';
import { Box, CssBaseline, useTheme, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import TopNavigation from './TopNavigation';
import LeftNavigation from './LeftNavigation';
import Breadcrumb from './Breadcrumb';
import RightSidebar from './RightSidebar';
import Footer from './Footer';

const Layout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [leftDrawerOpen, setLeftDrawerOpen] = React.useState(!isMobile);
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(!isMobile);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      
      {/* Header */}
      <Header 
        onLeftDrawerToggle={() => setLeftDrawerOpen(!leftDrawerOpen)}
        onRightDrawerToggle={() => setRightDrawerOpen(!rightDrawerOpen)}
      />
      
      {/* Top Navigation */}
      <TopNavigation />
      
      {/* Main Content Area */}
      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* Left Navigation */}
        <LeftNavigation 
          open={leftDrawerOpen} 
          onClose={() => setLeftDrawerOpen(false)}
          variant={isMobile ? 'temporary' : 'persistent'}
        />
        
        {/* Work Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            width: { 
              sm: leftDrawerOpen ? 'calc(100% - 240px)' : '100%',
              md: leftDrawerOpen ? 'calc(100% - 240px)' : '100%'
            },
            ml: { 
              md: leftDrawerOpen ? '240px' : 0 
            },
            mr: { 
              md: rightDrawerOpen ? '300px' : 0 
            },
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          {/* Breadcrumb */}
          <Breadcrumb />
          
          {/* Page Content */}
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Outlet />
          </Box>
        </Box>
        
        {/* Right Sidebar */}
        <RightSidebar 
          open={rightDrawerOpen} 
          onClose={() => setRightDrawerOpen(false)}
          variant={isMobile ? 'temporary' : 'persistent'}
        />
      </Box>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;