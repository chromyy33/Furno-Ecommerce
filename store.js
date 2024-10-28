import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";
import wishlistReducer from "./wishlist";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    wishlist: wishlistReducer,
  },
});
export default store;
