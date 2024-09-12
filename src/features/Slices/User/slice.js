import { patchInstagramUserByUsername, getMe } from "./thunks"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  error: null,
  success: false,
  profile: null,
  instagramProfile: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state) => {
      state.loading = false
      state.error = null
      state.success = false
    },
    setError: (state, action) => {
      state.error = action.payload; // Позволяет установить ошибку
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
      .addCase(getMe.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(getMe.fulfilled, (state, { payload }) => {
        state.loading = false
        state.error = null
        state.success = true
        state.instagramProfile = payload
      })
      .addCase(getMe.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
        state.success = false
      })
  },
})

export const { resetUserState, setError} = userSlice.actions

export default userSlice.reducer
