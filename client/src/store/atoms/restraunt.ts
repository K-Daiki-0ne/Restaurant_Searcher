import { atom } from 'recoil';

const currentRestaurants: any[] = [];

export const userCurrentRestaurants = atom({
  key: 'userCurrentRestaurants',
  default: currentRestaurants
});