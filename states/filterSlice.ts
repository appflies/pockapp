import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterType = {
  desde: string;
  hasta: string;
  per_page: number;
  page: number;
};

const initialState: FilterType = {
  desde: '',
  hasta: '',
  per_page: 10,
  page: 1
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<UserType>) => action.payload,
    clearFilter: () => initialState
  }
});

export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;