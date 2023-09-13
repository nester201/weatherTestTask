import {RootState} from '../store';

export const selectCity = {
  get: (state: RootState) => state.city,
  getCity: (state: RootState) => selectCity.get(state).city,
};
