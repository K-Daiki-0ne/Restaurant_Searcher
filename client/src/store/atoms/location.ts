import { atom } from 'recoil';

// type UserLocation =  {
//   lat: string;
//   lon: string;
// }

const currentPosition: object= {};

export const userCurrentLocation = atom({
  key: 'userCurrentLocation',
  default: currentPosition
});