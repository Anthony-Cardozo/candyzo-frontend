
import axios from 'axios';

// Set up base URL for your API
const api = axios.create({
  baseURL: 'http://localhost:3000/', // Backend API URL
});

export const getCandies = async () => {
  try {
    const response = await api.get('/candies');
    return response.data;
  } catch (error) {
    console.error('Error fetching candies:', error);
    throw error;
  }
};
