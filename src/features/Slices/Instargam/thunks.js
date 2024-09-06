import { Instagram } from "../../../shared/api/axios/requests/instagram/instagram.service"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { endpoints } from "../../../shared/api/axios/endpoints/endpoints"

const { get } = endpoints.general.instagram

export const getInstagramProfile = createAsyncThunk(
  get.instagramProfile,
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await Instagram.getInstagramProfile()
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

export const getInstagramAnalysis = createAsyncThunk(
  get.analyticProfile,
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await Instagram.getInstagramAnalysis()
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
