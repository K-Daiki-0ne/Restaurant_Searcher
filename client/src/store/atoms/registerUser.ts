import { atom } from 'recoil';

type RegisterUserInformation = {
  name: string;
  password: string;
}

const registerUserInformation: RegisterUserInformation[] = [];

export const registerUser = atom({
  key: 'registerUser',
  default: registerUserInformation
})