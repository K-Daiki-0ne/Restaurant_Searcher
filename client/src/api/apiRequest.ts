import axios from 'axios';

export const apiRequest = async (lat: string, lon: string) => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  const reqURL = `${baseUrl}/api/v1/${lat}/${lon}`;
  const data = await axios.get(reqURL);
  return data
}