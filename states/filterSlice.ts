import { FilterType } from "@/@types/filter";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FilterType | null = null;

const FilterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<UserType>) => action.payload,
        clearFilter: () => null
    }
});

export const { setFilter, clearFilter } = userSlice.actions;
export default FilterSlice.reducer;