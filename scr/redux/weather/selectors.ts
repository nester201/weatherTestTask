import {RootState} from '../store';

export const selectWeather = {
  get: (state: RootState) => state.weather,
  getTodayWeather: (state: RootState) => selectWeather.get(state).todayWeather,
};
