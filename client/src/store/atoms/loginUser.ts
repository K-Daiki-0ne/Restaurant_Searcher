import { atom } from 'recoil';

const loginUserInformation: any = {};

export const loginUser = atom({
  key: 'loginUser',
  default: loginUserInformation
});