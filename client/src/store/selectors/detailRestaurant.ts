import { selector } from 'recoil';
import { userCurrentDetailRestaurant } from '../atoms/detailRestaurant';

export const detailCurrentRestaurantName = selector({
  key: 'detailCurrentRestaurantName',
  get: ({ get }) => {
    const detailRestName: any = get(userCurrentDetailRestaurant);
    return detailRestName.name
  }
})

export const detailCurrentRestaurantAdress = selector({
  key: 'detailCurrentRestaurantAdress',
  get: ({ get }) => {
    const detailRestAdress = get(userCurrentDetailRestaurant);
    return detailRestAdress.address
  }
})

export const detailCurrentRestaurantImage = selector({
  key: 'detailCurrentRestaurantImage',
  get: ({ get }) => {
    const detailRestImage = get(userCurrentDetailRestaurant);
    return detailRestImage.image_url
  }
})

export const detailCurrentRestaurantPr = selector({
  key: 'detailCurrentRestaurantPr',
  get: ({ get }) => {
    const detailRestPr = get(userCurrentDetailRestaurant);
    return detailRestPr.pr
  }
})