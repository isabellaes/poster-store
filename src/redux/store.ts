import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartSlice";
import productReducer from "./reducer/productSlice";
import orderReducer from "./reducer/orderSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
