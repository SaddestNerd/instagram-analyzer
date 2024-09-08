import { User } from "../../../shared/api/axios/requests/user/user.service"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { endpoints } from "../../../shared/api/axios/endpoints/endpoints"

const { patch } = endpoints.general.user

export const patchInstagramUserByUsername = createAsyncThunk(
  patch.instagramUserByUsername,
  async ({username}, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await User.instagramUserByUsername({username})
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)


