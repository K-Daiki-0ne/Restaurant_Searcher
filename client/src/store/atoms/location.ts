import { atom } from 'recoil';

const currentPosition: object= {};

export const userCurrentLocation = atom({
  key: 'userCurrentLocation',
  default: currentPosition
});