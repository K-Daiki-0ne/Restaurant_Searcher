import axios from 'axios';

export const postRegisterUser = async (name: string, password: string) => {
  try {
    const baseUrl = process.env.REACT_APP_BACKEND_URL;
    const reqUrl = `${baseUrl}/register/user/${name}/${password}`;
    const result = await axios.post(reqUrl);
    return result.data
  } catch (err) {
    return 'ユーザーの登録に失敗しました'
  }
}