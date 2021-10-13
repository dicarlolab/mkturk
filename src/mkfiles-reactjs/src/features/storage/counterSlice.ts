import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // [increment] this is possible because immer makes the
    // state object IMMUTABLE under the hood
    incremented(state) {
      state.value++;
    },

    // [decrement]
    decremented(state) {
      state.value--;
    },

    // reset
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },

    doNothing(state) {
      return state;
    },
  },
});

export const { incremented, decremented, amountAdded, doNothing } =
  counterSlice.actions;
export default counterSlice.reducer;
