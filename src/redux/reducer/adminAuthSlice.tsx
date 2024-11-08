import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

/* export const getUserToken = createAsyncThunk(
  "token/getUserToken",
  async (userId) => {
    try {
      const response = await getToken(userId);
      return response;
    } catch (error) {
      throw new Error("something went wrong");
    }
  }
); */

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  /*   extraReducers: (builder) => {
    builder.addCase(getUserToken.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  }, */
});

export default authSlice.reducer;
