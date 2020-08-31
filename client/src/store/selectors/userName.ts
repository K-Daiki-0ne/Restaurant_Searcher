import { selector } from 'recoil';
import { loginUserName } from '../atoms/login';
import { registerUserName } from '../atoms/register';

export const serviceRegistedUserName = selector({
  key: 'registerdUserName',
  get: ({ get }) => {
    const loginedUserName: string = get(loginUserName);
    const registeredUserName: string = get(registerUserName);

    if(!loginedUserName && !registeredUserName) {
      return 'login'
    } else if (loginedUserName) {
      return loginedUserName
    } else if (registeredUserName) {
      return registeredUserName
    } else {
      return 'ユーザー情報の取得に失敗しました'
    }
  }
})