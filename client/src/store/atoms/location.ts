import { atom } from 'recoil';

type UserLocation =  {
  lat: string;
  lon: string;
}

const currentPosition: UserLocation[]= [];

export const userCurrentLocation = atom({
  key: 'userCurrentLocation',
  default: currentPosition
});