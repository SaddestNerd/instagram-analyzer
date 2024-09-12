import { auth } from "../../../../lib/config/firebaseConfig"
import { endpoints } from "../../endpoints/endpoints"
import api from "../../api"

const { patch, get } = endpoints.general.user

const handleError = (error, message) => {
  console.error(message, error)
}

export const User = {
  instagramUserByUsername: async ({username}) => {
    try {
      const user = auth.currentUser
      const token = await user.getIdToken()

      return api
        .patch(patch.instagramUserByUsername, {instagramUsername: username}, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          return response
        })
    } catch (error) {
      handleError(error, "Failed to add Instagram profile")
    }
  },
  getMe: async () => {
    try {
      const user = auth.currentUser
      const token = await user.getIdToken()

      return api
        .get(get.me, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          return response
        })
    } catch (error) {
      handleError(error, "Failed to add Instagram profile")
    }
  },
}
