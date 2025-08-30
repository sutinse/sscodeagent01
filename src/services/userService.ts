// User service for API calls following React 19 best practices
export interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  role: string;
  bio: string;
  avatar?: string;
}

export interface UserSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  twoFactorAuth: boolean;
  darkMode: boolean;
}

class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  // Fetch user data from API
  async fetchUserData(userId: number = 1): Promise<UserData> {
    try {
      // Using JSONPlaceholder as a mock API, then enhancing the data
      const response = await fetch(`${this.baseUrl}/users/${userId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.statusText}`);
      }
      
      const userData = await response.json();
      
      // Transform and enhance the API response to match our interface
      return {
        id: userData.id,
        name: userData.name || 'Seppo Sutinen',
        email: userData.email || 's.sutinen@cgi.com',
        phone: userData.phone || '+358407420894',
        location: `${userData.address?.city || 'Helsinki'}, ${userData.address?.zipcode || 'Finland'}`,
        role: userData.company?.bs || 'IT-Architect',
        bio: `${userData.company?.catchPhrase || 'Passionate with AI and any new technologies'}`,
      };
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Fallback to default data if API fails
      return {
        id: 1,
        name: 'Seppo Sutinen',
        email: 's.sutinen@cgi.com',
        phone: '+358407420894',
        location: 'Helsinki, Finland',
        role: 'IT-Architect',
        bio: 'Passionate with AI and any new technologies',
      };
    }
  }

  // Fetch user settings (mock implementation)
  async fetchUserSettings(): Promise<UserSettings> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock settings data
    return {
      emailNotifications: true,
      pushNotifications: false,
      twoFactorAuth: true,
      darkMode: false,
    };
  }

  // Update user data
  async updateUserData(userId: number, userData: Partial<UserData>): Promise<UserData> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`Failed to update user data: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating user data:', error);
      throw error;
    }
  }

  // Update user settings
  async updateUserSettings(settings: Partial<UserSettings>): Promise<UserSettings> {
    // Mock implementation
    await new Promise(resolve => setTimeout(resolve, 500));
    return settings as UserSettings;
  }
}

// Export singleton instance
export const userService = new UserService();