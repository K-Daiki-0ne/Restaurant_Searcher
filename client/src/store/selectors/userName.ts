import { selector } from 'recoil';
import { loginUser } from '../atoms/loginUser';
import { registerUser } from '../atoms/registerUser';

export const serviceRegistedUserName = selector<string>({
  key: 'serviceRegistedUserName',
  get: ({ get }) => {
    const loginedUserName: any = get(loginUser);
    const registedUserName: any = get(registerUser);
    if(!loginedUserName.name && !registedUserName.name) {
      console.log(loginedUserName.name && registedUserName.name)
      return 'login'
    } else if(loginedUserName.name && !registedUserName.name) {
      return loginedUserName.name;
    } else if(!loginedUserName.name && registedUserName.name) {
      return registedUserName.name;
    } else {
      return 'ユーザー名の取得に失敗しました。'
    }
  }
})