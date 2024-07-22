import axios from 'axios';
import API_BASE_URL from '../config';

const summaryAPI = axios.create({
  baseURL: `${API_BASE_URL}/`,
});

export const getProvince = async () => {
  try {
    const response = await summaryAPI.get('provinces');
    return response.data;
  } catch (error) {
    console.error('Error fetching province:', error);
    throw error;
  }
};

export const getDistrict = async (province_id) => {
  try {
    const response = await summaryAPI.get(`districts?province_id=${province_id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching province:', error);
    throw error;
  }
};

export const getFarmersByDistrict = async (district_id) => {
  try {
    const response = await summaryAPI.get(`farmers?district_id=${district_id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching province:', error);
    throw error;
  }
};
