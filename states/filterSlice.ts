import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterType = {
  desde: string;
  hasta: string;
  per_page: number;
  page: number;
  compra_id?: number;
};

const initialState: FilterType = {
  desde: '',
  hasta: '',
  per_page: 10,
  page: 1,
  compra_id: undefined
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => action.payload,
    clearFilter: () => initialState,
    setCompraID: (state, action: PayloadAction<number | undefined>) => {
      state.compra_id = action.payload;
    }
  }
});

export const { setFilter, clearFilter, setCompraID } = filterSlice.actions;
export default filterSlice.reducer;