import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Form1Schema } from '../types/form1Schema';

const initialState: Form1Schema = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  gender: undefined,
};

export const form1Slice = createSlice({
  name: 'form1',
  initialState,

  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },

    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },

    setPhoneNumber: (state, action: PayloadAction<string>) => {
      let phoneNumber = action.payload.replace(/\D/g, '');

      if (phoneNumber.length > 11) {
        phoneNumber = phoneNumber.substring(0, 11);
      }

      let formattedNumber = '+7 (';
      if (phoneNumber.length > 1) {
        formattedNumber += phoneNumber.substring(1, 4);
      }
      if (phoneNumber.length >= 5) {
        formattedNumber += ') ' + phoneNumber.substring(4, 7);
      }
      if (phoneNumber.length >= 8) {
        formattedNumber += '-' + phoneNumber.substring(7, 9);
      }
      if (phoneNumber.length >= 10) {
        formattedNumber += '-' + phoneNumber.substring(9, 11);
      }

      state.phoneNumber = formattedNumber;
    },

    setGender: (state, action: PayloadAction<number>) => {
      state.gender = action.payload;
    },

    clearData: state => {
      state.firstName = '';
      state.lastName = '';
      state.phoneNumber = '';
      state.gender = undefined;
    },
  },
});

export const { actions: form1Actions } = form1Slice;
export const { reducer: form1Reducer } = form1Slice;
