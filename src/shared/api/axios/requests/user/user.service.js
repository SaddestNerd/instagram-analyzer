import { auth } from "../../../../lib/config/firebaseConfig"
import { endpoints } from "../../endpoints/endpoints"
import api from "../../api"

const { patch } = endpoints.general.user

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
}
