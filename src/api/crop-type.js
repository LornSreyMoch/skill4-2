import axios from 'axios';
import API_BASE_URL from '../config';

const cropTypeAPI = axios.create({
  baseURL: `${API_BASE_URL}`,
});


export const getCropType = async () => {
  try {
    const response = await cropTypeAPI.get('https://agro-admin-dashboard-api.vercel.app/api/crop-types');
    return response.data;
  } catch (error) {
    console.error('Error fetching croptypes:', error);
    throw error;
  }
};
console.log(response);






