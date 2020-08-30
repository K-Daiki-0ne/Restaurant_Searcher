import { atom } from 'recoil';

const registerUserInformation = {};

export const registerUser = atom({
  key: 'registerUser',
  default: registerUserInformation
})