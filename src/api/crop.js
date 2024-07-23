import axios from 'axios';
import API_BASE_URL from '../config';
const CropAPI = axios.create({
  baseURL: `${API_BASE_URL}`,
});


export const getCrop = async () => {
  try {
    const response = await CropAPI.get('https://agro-admin-dashboard-api.vercel.app/api/crops');
    return response.data;
  } catch (error) {
    console.error('Error fetching crops:', error);
    throw error;
  }
};






