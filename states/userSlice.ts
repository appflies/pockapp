import { UserType } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserType | null = null;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => action.payload,
        clearUser: () => null
    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;