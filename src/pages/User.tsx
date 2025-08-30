import React, { useState, Suspense } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Button,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Switch,
  FormControlLabel,
  Alert,
  Tab,
  Tabs,
  useTheme,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import { useUserData } from '../hooks/useUserData';
import type { UserData, UserSettings } from '../services/userService';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { UserProfileSkeleton } from '../components/LoadingComponents';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

// User Profile Content Component - handles the actual user data display
const UserProfileContent: React.FC = () => {
  const theme = useTheme();
  const { 
    userData, 
    userSettings, 
    isLoading, 
    error, 
    updateUserData, 
    updateUserSettings 
  } = useUserData(1);

  const [isEditing, setIsEditing] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Local state for editing - initialize from API data
  const [localUserInfo, setLocalUserInfo] = useState<UserData | null>(null);
  const [localSettings, setLocalSettings] = useState<UserSettings | null>(null);

  // Update local state when API data changes
  React.useEffect(() => {
    if (userData) {
      setLocalUserInfo(userData);
    }
  }, [userData]);

  React.useEffect(() => {
    if (userSettings) {
      setLocalSettings(userSettings);
    }
  }, [userSettings]);

  // Handle loading state
  if (isLoading || !localUserInfo || !localSettings) {
    return <UserProfileSkeleton />;
  }

  // Handle error state
  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 3 }}>
        {error}
      </Alert>
    );
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      if (localUserInfo) {
        await updateUserData(localUserInfo);
      }
      if (localSettings) {
        await updateUserSettings(localSettings);
      }
      setIsEditing(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to save user data:', err);
    }
  };

  const handleCancel = () => {
    // Reset local state to original API data
    if (userData) setLocalUserInfo(userData);
    if (userSettings) setLocalSettings(userSettings);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setLocalUserInfo(prev => prev ? { ...prev, [field]: value } : null);
  };

  const handleSettingChange = (setting: string) => {
    setLocalSettings(prev => prev ? { 
      ...prev, 
      [setting]: !prev[setting as keyof typeof prev] 
    } : null);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          User Profile
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your personal information and account settings
        </Typography>
      </Box>

      {showSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Profile updated successfully!
        </Alert>
      )}

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Profile Card */}
        <Box sx={{ flex: { md: '0 0 400px' } }}>
          <Card>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: theme.palette.primary.main,
                  fontSize: '3rem',
                }}
              >
                {localUserInfo.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
              
              <Typography variant="h5" gutterBottom>
                {localUserInfo.name}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {localUserInfo.role}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {localUserInfo.bio}
              </Typography>

              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                {!isEditing ? (
                  <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={handleEdit}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      startIcon={<SaveIcon />}
                      onClick={handleSave}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<CancelIcon />}
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </>
                )}
              </Box>
            </CardContent>
          </Card>

          {/* Quick Info */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary={localUserInfo.email} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary={localUserInfo.phone} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationIcon />
                  </ListItemIcon>
                  <ListItemText primary={localUserInfo.location} />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Box>

        {/* Main Content */}
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ width: '100%' }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="user profile tabs"
              sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
              <Tab
                icon={<PersonIcon />}
                iconPosition="start"
                label="Personal Info"
              />
              <Tab
                icon={<SettingsIcon />}
                iconPosition="start"
                label="Settings"
              />
              <Tab
                icon={<SecurityIcon />}
                iconPosition="start"
                label="Security"
              />
            </Tabs>

            {/* Personal Info Tab */}
            <TabPanel value={tabValue} index={0}>
              <Box sx={{ p: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={localUserInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={!isEditing}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email"
                  value={localUserInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Phone"
                  value={localUserInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Location"
                  value={localUserInfo.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  disabled={!isEditing}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Role"
                  value={localUserInfo.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  disabled={!isEditing}
                  variant="outlined"
                  sx={{ gridColumn: { sm: 'span 2' } }}
                />
                <TextField
                  fullWidth
                  label="Bio"
                  multiline
                  rows={4}
                  value={localUserInfo.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  disabled={!isEditing}
                  variant="outlined"
                  sx={{ gridColumn: { sm: 'span 2' } }}
                />
              </Box>
            </TabPanel>

            {/* Settings Tab */}
            <TabPanel value={tabValue} index={1}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Notification Preferences
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <NotificationsIcon />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Email Notifications" 
                      secondary="Receive notifications via email"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={localSettings.emailNotifications}
                          onChange={() => handleSettingChange('emailNotifications')}
                        />
                      }
                      label=""
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <NotificationsIcon />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Push Notifications" 
                      secondary="Receive push notifications on your device"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={localSettings.pushNotifications}
                          onChange={() => handleSettingChange('pushNotifications')}
                        />
                      }
                      label=""
                    />
                  </ListItem>
                </List>
              </Box>
            </TabPanel>

            {/* Security Tab */}
            <TabPanel value={tabValue} index={2}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Security Settings
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <SecurityIcon />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Two-Factor Authentication" 
                      secondary="Add an extra layer of security to your account"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={localSettings.twoFactorAuth}
                          onChange={() => handleSettingChange('twoFactorAuth')}
                        />
                      }
                      label=""
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText 
                      primary="Change Password" 
                      secondary="Update your account password"
                    />
                    <Button variant="outlined" size="small">
                      Change
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </TabPanel>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

// Main User component with React 19 best practices (Suspense + ErrorBoundary)
const User: React.FC = () => {
  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          User Profile
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your personal information and account settings
        </Typography>
      </Box>

      <ErrorBoundary>
        <Suspense fallback={<UserProfileSkeleton />}>
          <UserProfileContent />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};

export default User;