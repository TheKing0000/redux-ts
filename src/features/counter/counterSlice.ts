import { RootState } from "./../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounterState {
  value: number;
}
const initialState: ICounterState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
  },
});

export const selectCountValue = (state: RootState) => state.counter.value;
export const { increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
