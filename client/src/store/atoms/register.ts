import { atom } from 'recoil';

const registerName: string = '';

export const registerUserName = atom({
  key: 'RegisterUser',
  default: registerName
});