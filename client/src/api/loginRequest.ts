import axios from 'axios';

export const loginRequest = async (name: string, password: string) => {
  try {
    const baseUrl = process.env.REACT_APP_BACKEND_URL;
    const reqUrl = `${baseUrl}/login/user/${name}/pass/${password}`;
    const result = await axios.get(reqUrl);
    return result.data;
  } catch (err) {
    return 'ログインに失敗しました。'
  }
}