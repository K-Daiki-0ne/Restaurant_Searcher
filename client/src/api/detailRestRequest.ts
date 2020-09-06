import axios from 'axios';

export const detailRestRequest = async (id: string) => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  const reqURL = `${baseUrl}/api/v1/${id}`;
  try {
    const response = await axios.get(reqURL);
    console.log('API Request ...OK');
    return response.data;
  } catch (err) {
    console.log('API Request ...NO');
  }
}