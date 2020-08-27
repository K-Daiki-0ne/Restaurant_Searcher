import { atom } from 'recoil';

const currentRestaurants: any= [];

export const userCurrentLocation = atom({
  key: 'userCurrentLocation',
  default: currentRestaurants
});