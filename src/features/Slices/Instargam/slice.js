import { getInstagramProfile, getInstagramAnalysis } from "./thunks"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  error: null,
  success: false,
  profile: null,
  profileAnalysis: null,
}

const instagramSlice = createSlice({
  name: "instagram",
  initialState,
  reducers: {
    resetSubscribeState: (state) => {
      state.loading = false
      state.error = null
      state.success = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInstagramProfile.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(getInstagramProfile.fulfilled, (state, { payload }) => {
        state.loading = false
        state.error = null
        state.success = true
        state.profile = payload
      })
      .addCase(getInstagramProfile.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.success = false
      })
      .addCase(getInstagramAnalysis.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(getInstagramAnalysis.fulfilled, (state, { payload }) => {
        state.loading = false
        state.error = null
        state.success = true
        state.profileAnalysis = payload
      })
      .addCase(getInstagramAnalysis.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.success = false
      })
  },
})

export const { resetSubscribeState } = instagramSlice.actions

export default instagramSlice.reducer
