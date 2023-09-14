import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IWeather} from '../../interfaces /IWeather';

interface WeatherState {
  todayWeather: IWeather[] | null;
}

const initialState: WeatherState = {
  todayWeather: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addWeather(state, action: PayloadAction<IWeather[] | null>) {
      state.todayWeather = action.payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;
