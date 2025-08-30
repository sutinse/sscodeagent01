import React, { useState } from 'react';
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

const User: React.FC = () => {
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [userInfo, setUserInfo] = useState({
    name: 'Seppo Sutinen',
    email: 's.sutinen@cgi.com',
    phone: '+358407420894',
    location: 'Helsinki, Finland',
    role: 'IT-Architect',
    bio: 'Passionate with AI and any new technologies',
  });

  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    twoFactorAuth: true,
    darkMode: false,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSettingChange = (setting: string) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting as keyof typeof prev] }));
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
                {userInfo.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
              
              <Typography variant="h5" gutterBottom>
                {userInfo.name}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {userInfo.role}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {userInfo.bio}
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
                  <ListItemText primary={userInfo.email} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary={userInfo.phone} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationIcon />
                  </ListItemIcon>
                  <ListItemText primary={userInfo.location} />
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
                  value={userInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={!isEditing}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email"
                  value={userInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Phone"
                  value={userInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Location"
                  value={userInfo.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  disabled={!isEditing}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Role"
                  value={userInfo.role}
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
                  value={userInfo.bio}
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
                          checked={settings.emailNotifications}
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
                          checked={settings.pushNotifications}
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
                          checked={settings.twoFactorAuth}
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

export default User;