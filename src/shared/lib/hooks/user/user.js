import { useDispatch } from "react-redux"
import {
  patchInstagramUserByUsername
} from "../../../../features/Slices/User/thunks"

const useUserData = () => {
  const dispatch = useDispatch()

const dispatchInstagramAccount = async (username) => {

    try {
      dispatch(patchInstagramUserByUsername({username}))

    } catch (error) {
      console.error("Error add Instagram profile:", error)
    }
  }

  return { dispatchInstagramAccount }
}

export default useUserData
