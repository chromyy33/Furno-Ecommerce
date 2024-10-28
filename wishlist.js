import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishItem(state, action) {
      state.wishlist.push(action.payload);
    },
    removeWishItem(state, action) {
      state.wishlist = state.wishlist.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});
export const { addWishItem, deleteWishItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
//add case where wishlist item is added to cart
