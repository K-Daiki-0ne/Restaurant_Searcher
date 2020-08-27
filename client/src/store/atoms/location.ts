import { atom } from 'recoil';

const currentPosition: any = {}

export const userCurrentLocation = atom({
  key: 'userCurrentLocation',
  default: currentPosition
});