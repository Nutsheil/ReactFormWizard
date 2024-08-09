import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Form3Schema } from '../types/form3Schema';
import { MIN_LOAN_AMOUNT, MIN_LOAN_TERM } from 'shared/const/loan';

const initialState: Form3Schema = {
  loanAmount: MIN_LOAN_AMOUNT,
  loanTerm: MIN_LOAN_TERM,
};

export const form3Slice = createSlice({
  name: 'form3',
  initialState,

  reducers: {
    setLoanAmount: (state, action: PayloadAction<number>) => {
      state.loanAmount = action.payload;
    },

    setLoanTerm: (state, action: PayloadAction<number>) => {
      state.loanTerm = action.payload;
    },

    clearData: state => {
      state.loanAmount = MIN_LOAN_AMOUNT;
      state.loanTerm = MIN_LOAN_TERM;
    },
  },
});

export const { actions: form3Actions } = form3Slice;
export const { reducer: form3Reducer } = form3Slice;
