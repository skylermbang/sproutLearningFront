import axios from 'axios';

// Ensure REACT_APP_API_BASE_URL is accessible and correctly set
const baseURL = process.env.REACT_APP_API_BASE_URL;
console.log("API Base URL:", baseURL);  // Log to verify the URL

const api = axios.create({
    baseURL,
    withCredentials: true,  // Include cookies if needed for authentication
});

// Function to fetch the current authenticated user
export const fetchCurrentUser = async () => {
    const response = await api.get('/users/me');
    if (response.data.success) {
        return response.data.user;
    } else {
        throw new Error('Failed to fetch user');
    }
};

// Function to fetch enrollments for a specific user
export const fetchUserEnrollments = async (userId: string) => {
    const response = await api.get(`/enrollments/users/${userId}`);
    return response.data;
};

// Function to enroll a user in a class
export const enrollUserInClass = async (classId: string) => {
    const response = await api.post('/enrollments', { classId });
    return response.data;
};

export const removeUserEnrollment = async ({ classId, userId }: { classId: string; userId: string }) => {
    const response = await api.delete(`/enrollments/users/${userId}/classes/${classId}`);
    return response.data;
};

export const addClass = async (newClass: any) => {
    const response = await api.post('/classes', newClass);
    return response.data;
};

// Sign Up Function
export const signUp = async (newUser: { userId: string; password: string; email: string }) => {
    const response = await api.post('/users/signUp', newUser);
    return response.data;
};

// Sign In Function
export const signIn = async (loginUser: { userId: string; password: string }) => {
    const response = await api.post('/users/signIn', loginUser);
    return response.data;
};

export default api;
