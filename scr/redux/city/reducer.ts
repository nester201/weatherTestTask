import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICity} from '../../interfaces /ICity';

interface CityState {
  city: ICity | null;
}

const initialState: CityState = {
  city: null,
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    addCity(state, action: PayloadAction<ICity>) {
      state.city = action.payload;
    },
  },
});

export const cityActions = citySlice.actions;
