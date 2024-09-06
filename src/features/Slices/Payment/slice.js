import { getCurrency, getPlan, postSubscribeWithCard, postSubscribeWithGooglePay, postSubscribeWithApplePay } from "./thunks";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  currency: null,
  error: null,
  plan: null,
  success: false,
  registerToken: null,
}

const paymentSlice = createSlice({
  name: 'payment',
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
      .addCase(getPlan.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(getPlan.fulfilled, (state, { payload }) => {
        state.loading = false
        state.success = true
        state.plan = payload;
      })
      .addCase(getPlan.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.success = false
      })
      .addCase(getCurrency.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(getCurrency.fulfilled, (state, { payload }) => {
        state.loading = false
        state.success = true
        state.currency = payload;
      })
      .addCase(getCurrency.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.success = false
      })
      .addCase(postSubscribeWithCard.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(postSubscribeWithCard.fulfilled, (state, { payload }) => {
        state.loading = false
        state.error = null
        state.registerToken = payload
      })
      .addCase(postSubscribeWithCard.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.success = false
      })
      .addCase(postSubscribeWithGooglePay.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(postSubscribeWithGooglePay.fulfilled, (state, { payload }) => {
        state.loading = false
        state.error = null
        state.success = true
        state.registerToken = payload
      })
      .addCase(postSubscribeWithGooglePay.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.success = false
      })
      .addCase(postSubscribeWithApplePay.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(postSubscribeWithApplePay.fulfilled, (state, { payload }) => {
        state.loading = false
        state.error = null
        state.success = true
        state.registerToken = payload
      })
      .addCase(postSubscribeWithApplePay.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.success = false
      })
  },
});

export const { resetSubscribeState } = paymentSlice.actions;

export default paymentSlice.reducer;