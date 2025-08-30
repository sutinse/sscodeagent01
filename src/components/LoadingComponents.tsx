import React from 'react';
import { Box, CircularProgress, Typography, Skeleton, Card, CardContent } from '@mui/material';

// Simple loading spinner
export const LoadingSpinner: React.FC<{ message?: string }> = ({ message = 'Loading...' }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      p: 4,
      gap: 2,
    }}
  >
    <CircularProgress size={40} />
    <Typography variant="body2" color="text.secondary">
      {message}
    </Typography>
  </Box>
);

// User profile skeleton loader
export const UserProfileSkeleton: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
    {/* Profile Card Skeleton */}
    <Box sx={{ flex: { md: '0 0 400px' } }}>
      <Card>
        <CardContent sx={{ textAlign: 'center', p: 4 }}>
          <Skeleton variant="circular" width={120} height={120} sx={{ mx: 'auto', mb: 2 }} />
          <Skeleton variant="text" width="60%" height={32} sx={{ mx: 'auto', mb: 1 }} />
          <Skeleton variant="text" width="40%" height={20} sx={{ mx: 'auto', mb: 1 }} />
          <Skeleton variant="text" width="80%" height={20} sx={{ mx: 'auto', mb: 3 }} />
          <Skeleton variant="rectangular" width={120} height={36} sx={{ mx: 'auto' }} />
        </CardContent>
      </Card>

      {/* Contact Info Skeleton */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Skeleton variant="text" width="60%" height={24} sx={{ mb: 2 }} />
          {[...Array(3)].map((_, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Skeleton variant="circular" width={24} height={24} sx={{ mr: 2 }} />
              <Skeleton variant="text" width="70%" height={20} />
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>

    {/* Main Content Skeleton */}
    <Box sx={{ flex: 1 }}>
      <Card>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', gap: 2, p: 2 }}>
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} variant="rectangular" width={120} height={40} />
            ))}
          </Box>
        </Box>
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
            {[...Array(6)].map((_, index) => (
              <Skeleton key={index} variant="rectangular" height={56} />
            ))}
          </Box>
        </Box>
      </Card>
    </Box>
  </Box>
);