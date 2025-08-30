import React from 'react';
import {
  Breadcrumbs,
  Link,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import {
  Home as HomeIcon,
  NavigateNext as NavigateNextIcon,
} from '@mui/icons-material';

const Breadcrumb: React.FC = () => {
  const location = useLocation();

  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    
    const breadcrumbs = [
      {
        label: 'Home',
        path: '/',
        icon: <HomeIcon sx={{ mr: 0.5, fontSize: 20 }} />,
      }
    ];

    // Add breadcrumbs for each path segment
    pathnames.forEach((pathname, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = pathname.charAt(0).toUpperCase() + pathname.slice(1);
      
      breadcrumbs.push({
        label,
        path,
        icon: <NavigateNextIcon sx={{ mr: 0.5, fontSize: 20 }} />,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumb on home page only
  }

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 2, 
        backgroundColor: '#fafafa',
        borderBottom: '1px solid #e0e0e0'
      }}
    >
      <Box>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
          sx={{
            '& .MuiBreadcrumbs-li': {
              display: 'flex',
              alignItems: 'center',
            }
          }}
        >
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            if (isLast) {
              return (
                <Typography
                  key={breadcrumb.path}
                  color="text.primary"
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    fontWeight: 500
                  }}
                >
                  {breadcrumb.icon}
                  {breadcrumb.label}
                </Typography>
              );
            }

            return (
              <Link
                key={breadcrumb.path}
                underline="hover"
                color="inherit"
                component={RouterLink}
                to={breadcrumb.path}
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  }
                }}
              >
                {breadcrumb.icon}
                {breadcrumb.label}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Box>
    </Paper>
  );
};

export default Breadcrumb;