import { useQuery } from 'react-query';
import axios from 'axios';
import { fetchCurrentUser } from '../api';

interface UserProps {
  userId: string;
  userNickname: string;
  email: string;
  admin: boolean;
}

// Hook to fetch the current authenticated user
const useUser = () => {
  return useQuery<UserProps, Error>('currentUser', async () => {
    try {
      // Use the fetchCurrentUser function directly
      const user = await fetchCurrentUser();
      return user; // Return the user data if the request is successful
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error; // Handle error
    }
  });
};

export default useUser;
