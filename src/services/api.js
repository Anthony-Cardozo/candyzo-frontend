
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
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
