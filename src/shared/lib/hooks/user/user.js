import { useDispatch } from "react-redux"
import {
  patchInstagramUserByUsername, getMe
} from "../../../../features/Slices/User/thunks"

const useUserData = () => {
  const dispatch = useDispatch()

  const dispatchInstagramAccount = async (username) => {

    try {
      dispatch(patchInstagramUserByUsername({ username }))

    } catch (error) {
      console.error("Error add Instagram profile:", error)
    }
  }
  
  const dispatchGetMe = async () => {
    try {
      dispatch(getMe())
    } catch (error) {
      console.error("Get me error:", error)
    }
  }


  return { dispatchInstagramAccount, dispatchGetMe }
}




export default useUserData
