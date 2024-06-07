import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterType = {
  screen: string;
};

const initialState: FilterType | null = null;

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => action.payload,
    clearFilter: () => initialState,
  }
});

export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;