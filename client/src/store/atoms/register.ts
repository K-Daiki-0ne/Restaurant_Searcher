import { atom } from 'recoil';

const registerName: string = '';

const registerPassword: string = '';

export const registerUserName = atom({
  key: 'RegisterUser',
  default: registerName
});

export const registerUserPassword = atom({
  key: 'RegisterPassword',
  default: registerPassword
})