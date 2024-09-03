
import { Auth } from "../../../shared/api/axios/requests/auth/auth.service"
import { createAsyncThunk } from '@reduxjs/toolkit';

import { endpoints } from "../../../shared/api/axios/endpoints/endpoints"


const { get, post } = endpoints.general.auth



export const postCheckSignUpToken = createAsyncThunk(
  post.checkSignUpToken,
  async ({ token }, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await Auth.checkSignUpToken({
        token
      })
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

export const postSignUpUser = createAsyncThunk(
  post.signUp,
  async ({ email, password, token }, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await Auth.signUpUser({
        email,
        password,
        token
      })
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