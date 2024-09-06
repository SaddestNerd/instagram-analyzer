import axios from 'axios'

import { endpoints } from "../../endpoints"
import api from "../../api"
import { useCallback, useMemo } from 'react'

const { get, post } = endpoints.general.payment


const getPlanService = () => {
  try {
    return api.get(get.plan).then((response) => {
      return response
    })
  } catch (_) { }
}

const getCurrencyService = () => {
  try {
    return api.get(get.currency).then((response) => {
      return response
    })
  } catch (_) { }
}



export const Payment = {
  postSubscribeWithCard: async ({ email, firstName, lastName, tokenId }) => {
    try {
      const response = await api.post(post.subscribeWithCard, {
        email,
        firstName,
        lastName,
        tokenId,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  postSubscribeWithGooglePay: async ({ email, name, tokenId }) => {
    try {
      const response = await api.post(post.subscribeWithGooglePay, {
        email,
        name,
        tokenId,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  postSubscribeWithApplePay: async ({ email, familyName, givenName, tokenId }) => {
    try {
      const response = await api.post(post.subscribeWithApplePay, {
        tokenId,
        email,
        familyName,
        givenName
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const StorePaymentService = {
  getPlanService,
  getCurrencyService
}