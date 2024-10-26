import { createSlice } from "@reduxjs/toolkit";
import { State } from "../store";
import { Product } from "../../utils/types";
import { products } from "../../utils/data";

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: products,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;

export const selectProducts = (state: State) => state.product.products;

export default productSlice.reducer;
