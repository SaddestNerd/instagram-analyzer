import { patchInstagramUserByUsername } from "./thunks"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  error: null,
  success: false,
  profile: null,

}

const userSlice = createSlice({
  name: "user",
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
      .addCase(patchInstagramUserByUsername.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(patchInstagramUserByUsername.fulfilled, (state, { payload }) => {
        state.loading = false
        state.error = null
        state.success = true
        state.profile = payload
      })
      .addCase(patchInstagramUserByUsername.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.success = false
      })
  },
})

export const { resetSubscribeState } = userSlice.actions

export default userSlice.reducer
