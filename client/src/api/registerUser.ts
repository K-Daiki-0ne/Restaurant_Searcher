import axios from 'axios';

export const registerUser = async (name: string, password: string) => {
  try {
    const baseUrl = process.env.REACT_APP_BACKEND_URL;
    const reqUrl = `${baseUrl}/register/user/${name}/${password}`;
    const result = await axios.post(reqUrl);
    return result
  } catch (err) {
    return 'ユーザーの登録に失敗しました'
  }
}