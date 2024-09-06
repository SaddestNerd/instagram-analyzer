
import {
   Payment,
  StorePaymentService,
  } from "../../../shared/api/axios/requests/payment/payment.service"
  import { createAsyncThunk } from '@reduxjs/toolkit';

  import { endpoints } from "../../../shared/api/axios/endpoints/endpoints"


  const { get, post } = endpoints.general.payment

  
export const getPlan = createAsyncThunk(
    get.plan,
    async (_, { rejectWithValue }) => {
      try {
        const {data: {data}} = await StorePaymentService.getPlanService();
        return data.planCode;
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
  

  export const getCurrency = createAsyncThunk(
    get.currency,
    async (_, { rejectWithValue }) => {
      try {
        const {data: {data}} = await StorePaymentService.getCurrencyService();
        return data.currency;
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
  

  export const postSubscribeWithCard = createAsyncThunk(
    post.subscribeWithCard,
    async ({email, firstName, lastName, tokenId}, { rejectWithValue }) => {
      try {
        const {
          data: { token },
        } = await Payment.postSubscribeWithCard({
            email,
            firstName,
            lastName,
            tokenId
        })

        return token
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )


  export const postSubscribeWithGooglePay = createAsyncThunk(
    post.subscribeWithGooglePay,
    async ({paymentData, email, tokenId }, { rejectWithValue }) => {
      const name = paymentData.paymentMethodData.info.billingAddress.name
      try {
        const {
          data: { token },
        } = await Payment.postSubscribeWithGooglePay({
            email,
            name,
            tokenId
        })
        return token
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )

  export const postSubscribeWithApplePay = createAsyncThunk(
    post.subscribeWithApplePay,
    async ({payment, email, tokenId }, { rejectWithValue }) => {
      const familyName = payment.billingContact.familyName;
      const givenName = payment.billingContact.givenName;
   
      try {
        const {
          data: { token },
        } = await Payment.postSubscribeWithApplePay({
            email,
            familyName,
            givenName,
            tokenId
        })
        return token
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )