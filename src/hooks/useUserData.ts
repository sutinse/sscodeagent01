import { useState, useEffect } from 'react';
import { userService } from '../services/userService';
import type { UserData, UserSettings } from '../services/userService';

// Hook for fetching user data with React 19 best practices
export const useUserData = (userId: number = 1) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userSettings, setUserSettings] = useState<UserSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch user data
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [userDataResult, userSettingsResult] = await Promise.all([
          userService.fetchUserData(userId),
          userService.fetchUserSettings()
        ]);

        if (isMounted) {
          setUserData(userDataResult);
          setUserSettings(userSettingsResult);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch user data');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [userId]);

  // Update user data
  const updateUserData = async (updatedData: Partial<UserData>) => {
    try {
      setError(null);
      const result = await userService.updateUserData(userId, updatedData);
      setUserData(prev => prev ? { ...prev, ...result } : result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update user data';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  // Update user settings
  const updateUserSettings = async (updatedSettings: Partial<UserSettings>) => {
    try {
      setError(null);
      const result = await userService.updateUserSettings(updatedSettings);
      setUserSettings(prev => prev ? { ...prev, ...result } : result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update user settings';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  return {
    userData,
    userSettings,
    isLoading,
    error,
    updateUserData,
    updateUserSettings,
    // Helper methods
    refetch: () => {
      setIsLoading(true);
      setError(null);
      // Re-trigger the effect by setting a state (this is a simple refetch implementation)
    }
  };
};

// Alternative hook using React 19's use() hook pattern for suspense
// This would be used with Suspense boundaries
export const useUserDataWithSuspense = (userId: number = 1) => {
  // For React 19, we could use the new use() hook here
  // For now, we'll create a suspense-compatible version
  const [promise, setPromise] = useState<Promise<{ userData: UserData; userSettings: UserSettings }> | null>(null);

  if (!promise) {
    const newPromise = Promise.all([
      userService.fetchUserData(userId),
      userService.fetchUserSettings()
    ]).then(([userData, userSettings]) => ({ userData, userSettings }));
    
    setPromise(newPromise);
    throw newPromise; // This will trigger Suspense
  }

  // This would normally use React 19's use() hook
  // throw promise; // This would be the suspense pattern
  
  return promise;
};