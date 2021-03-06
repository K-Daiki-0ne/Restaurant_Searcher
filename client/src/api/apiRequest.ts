import axios from 'axios';

export const apiRequest = async (lat: string, lon: string) => {
  try {
    const baseUrl = process.env.REACT_APP_BACKEND_URL;
    const reqURL = `${baseUrl}/api/v1/${lat}/${lon}`;
    const data = await axios.get(reqURL);
    console.log('API Request ...OK')
    return data.data.rest    
  } catch (error) {
    const response = 'データの取得に失敗しました';
    console.log('API Request ...NO')
    return {
      response
    }
  }
}