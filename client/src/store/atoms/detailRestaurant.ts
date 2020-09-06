import { atom } from 'recoil';

const detailRestaurant: any = {};

export const userCurrentDetailRestaurant = atom({
  key: 'userCurrentDetailRestaurant',
  default: detailRestaurant
})