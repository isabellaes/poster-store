import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getToken } from "../../utils/api";
import { User } from "../../utils/types";

const initialState = {
  token: "",
};

export const getUserToken = createAsyncThunk<string, User>(
  "token/getUserToken",
  async (data: User) => {
    try {
      const response = await getToken(data);
      return response;
    } catch (error) {
      throw new Error("something went wrong");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserToken.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});
export const { logOutUser } = authSlice.actions;
export default authSlice.reducer;
