import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: '',
    reducers: {
        setSearch: (state, action) => (state = action.payload)
    }
})

export const inputSelector = (state) => state.search;
export default searchSlice.reducer;
export const { setSearch } = searchSlice.actions;
