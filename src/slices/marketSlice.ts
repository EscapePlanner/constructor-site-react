import { getIngredientsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '../utils/types';

export const getIngredients = createAsyncThunk('ingredients/getAll', async () =>
  getIngredientsApi()
);

type TInitialState = {
  ingredients: TIngredient[];
  isIngredientsLoading: boolean;
  error: null | string;
};

const initialState: TInitialState = {
  ingredients: [],
  isIngredientsLoading: false,
  error: null
};

const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {},
  selectors: {
    ingredientsSelector: (state) => state.ingredients,
    ingredientLoadSelector: (state) => state.isIngredientsLoading,
    errorSelector: (state) => state.error
  },
  extraReducers: (builder) => {
    builder.addCase(getIngredients.pending, (state) => {
      state.isIngredientsLoading = true;
      state.error = null;
    }),
      builder.addCase(getIngredients.rejected, (state, action) => {
        state.isIngredientsLoading = false;
        state.error = action.error.message ? action.error.message : null;
      });
    builder.addCase(getIngredients.fulfilled, (state, action) => {
      state.isIngredientsLoading = false;
      state.ingredients = action.payload;
    });
  }
});

export const { ingredientsSelector, errorSelector, ingredientLoadSelector } =
  marketSlice.selectors;

export default marketSlice.reducer;
