import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const searchSlice = createSlice({
  name: "searches",
  initialState,
  reducers: {
    addSearch(state, action) {
      state.searches.push(action.payload);
    },
    removeSearch(state, action) {
      state.searches = state.searches.filter((search) => {
        return search.id !== action.payload;
      });
    },
  },
});
export const {
    addSearch,
    deleteSearch,
   
  } = searchSlice.actions;
  export default searchSlice.reducer;