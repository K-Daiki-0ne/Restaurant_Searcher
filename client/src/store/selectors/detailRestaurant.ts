import { selectorFamily } from 'recoil';
import { userCurrentRestaurants } from '../atoms/restraunt';

export const detailCurrentRestaurants = selectorFamily({
  key: 'detailCurrentRestaurants',
  get: restId => async({ get }) => {
    const restList = get(userCurrentRestaurants)
    const result: any = await restList.filter((item) => item.restId)
  }
})