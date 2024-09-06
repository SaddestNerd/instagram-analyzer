import { useDispatch } from "react-redux"
import {
  getInstagramProfile,
  getInstagramAnalysis,
} from "../../../../features/Slices/Instargam/thunks"

const useInstagramData = () => {
  const dispatch = useDispatch()

  const dispatchInstagramAccount = async () => {
    try {
      dispatch(getInstagramProfile())
    } catch (error) {
      console.error("Error fetching Instagram profile:", error)
    }
  }

  const dispatchInstagramAnalysisAccount = async () => {
    try {
      dispatch(getInstagramAnalysis())
    } catch (error) {
      console.error("Error fetching Instagram analysis:", error)
    }
  }

  return { dispatchInstagramAccount, dispatchInstagramAnalysisAccount }
}

export default useInstagramData
