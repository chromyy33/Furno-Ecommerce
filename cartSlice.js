import { createSlice } from "@reduxjs/toolkit";

const initialState =[]
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
    },
    increaseItemQty(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity += 1;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQty(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity -= 1;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    addToWishlist() {
      state.wishlist.push(action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseItemQty,
  decreaseItemQty,
  clearCart,
  addToWishlist,
} = cartSlice.actions;
export default cartSlice.reducer;
