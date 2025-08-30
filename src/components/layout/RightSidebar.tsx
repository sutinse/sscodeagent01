import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Paper,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  TrendingUp as TrendingUpIcon,
  Event as EventIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const DRAWER_WIDTH = 300;

interface RightSidebarProps {
  open: boolean;
  onClose: () => void;
  variant: 'temporary' | 'persistent';
}

const RightSidebar: React.FC<RightSidebarProps> = ({ open, onClose, variant }) => {
  const notifications = [
    { id: 1, text: 'New user registered', time: '2 min ago', type: 'info' },
    { id: 2, text: 'System update available', time: '1 hour ago', type: 'warning' },
    { id: 3, text: 'Backup completed', time: '3 hours ago', type: 'success' },
  ];

  const activities = [
    { id: 1, text: 'User profile updated', time: '5 min ago' },
    { id: 2, text: 'New report generated', time: '15 min ago' },
    { id: 3, text: 'Database optimized', time: '1 hour ago' },
  ];

  const quickStats = [
    { label: 'Active Users', value: '1,234' },
    { label: 'Total Views', value: '56,789' },
    { label: 'Success Rate', value: '98.5%' },
  ];

  const drawerContent = (
    <Box sx={{ width: DRAWER_WIDTH, p: 2 }}>
      {/* Quick Stats */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Quick Stats
      </Typography>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          {quickStats.map((stat, index) => (
            <Box key={index} sx={{ mb: index < quickStats.length - 1 ? 2 : 0 }}>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
              <Typography variant="h6" color="primary">
                {stat.value}
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>

      {/* Notifications */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        <NotificationsIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
        Notifications
      </Typography>
      <Paper elevation={1} sx={{ mb: 3 }}>
        <List dense>
          {notifications.map((notification, index) => (
            <React.Fragment key={notification.id}>
              <ListItem>
                <ListItemIcon>
                  <NotificationsIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={notification.text}
                  secondary={
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <Typography variant="caption" sx={{ mr: 1 }}>
                        {notification.time}
                      </Typography>
                      <Chip
                        label={notification.type}
                        size="small"
                        color={
                          notification.type === 'success' ? 'success' :
                          notification.type === 'warning' ? 'warning' : 'primary'
                        }
                      />
                    </Box>
                  }
                />
              </ListItem>
              {index < notifications.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* Recent Activity */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        <TrendingUpIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
        Recent Activity
      </Typography>
      <Paper elevation={1} sx={{ mb: 3 }}>
        <List dense>
          {activities.map((activity, index) => (
            <React.Fragment key={activity.id}>
              <ListItem>
                <ListItemIcon>
                  <EventIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary={activity.text}
                  secondary={activity.time}
                />
              </ListItem>
              {index < activities.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* User Info */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        <PersonIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
        User Info
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Welcome back!
          </Typography>
          <Typography variant="h6">
            Seppo Sutinen
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Administrator
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <Drawer
      variant={variant}
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better mobile performance
      }}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          ...(variant === 'persistent' && {
            position: 'relative',
          }),
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default RightSidebar;