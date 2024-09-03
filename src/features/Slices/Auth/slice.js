import { postCheckSignUpToken, postSignUpUser } from "./thunks";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetSubscribeState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCheckSignUpToken.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(postCheckSignUpToken.fulfilled, (state) => {
        state.loading = false
        state.error = null
        state.success = true
      })
      .addCase(postCheckSignUpToken.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.success = false
      })
      .addCase(postSignUpUser.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(postSignUpUser.fulfilled, (state) => {
        state.loading = false
        state.error = null
        state.success = true
      })
      .addCase(postSignUpUser.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.success = false
      })
  },
});

export const { resetSubscribeState } = authSlice.actions;

export default authSlice.reducer;