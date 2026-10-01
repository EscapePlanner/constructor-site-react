import { getFeedsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

export const getFeedsThunk = createAsyncThunk('feed/getAll', async () =>
  getFeedsApi()
);

type TInitialState = {
  orders: TOrder[];
  total: number;
  totalToday: number;
};

const initialState: TInitialState = {
  orders: [],
  total: 0,
  totalToday: 0
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  selectors: {
    ordersSelector: (state) => state.orders,
    totalSelector: (state) => state.total,
    totalTodaySelector: (state) => state.totalToday
  },
  extraReducers: (builder) => {
    builder.addCase(getFeedsThunk.fulfilled, (state, action) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    });
  }
});

export const { ordersSelector, totalSelector, totalTodaySelector } =
  feedSlice.selectors;

export default feedSlice.reducer;
