import { atom } from 'recoil';

const loginUserInformation = {};

export const loginUser = atom({
  key: 'loginUser',
  default: loginUserInformation
});