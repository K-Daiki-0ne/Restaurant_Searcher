import { atom } from 'recoil';

const loginName: string = '';

const loginPassword: string = '';

export const loginUserName = atom({
  key: 'LoginName',
  default: loginName
})

export const loginUserPassword = atom({
  key: 'LoginPassword',
  default: loginPassword
})