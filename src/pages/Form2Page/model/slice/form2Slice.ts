import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Form2Schema } from '../types/form2Schema';

const initialState: Form2Schema = {
  placeOfWork: undefined,
  address: '',
};

export const form2Slice = createSlice({
  name: 'form2',
  initialState,

  reducers: {
    setPlaceOfWork: (state, action: PayloadAction<number>) => {
      state.placeOfWork = action.payload;
    },

    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },

    clearData: state => {
      state.placeOfWork = undefined;
      state.address = '';
    },
  },
});

export const { actions: form2Actions } = form2Slice;
export const { reducer: form2Reducer } = form2Slice;
