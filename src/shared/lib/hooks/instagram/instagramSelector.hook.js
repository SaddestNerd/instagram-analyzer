import { useSelector } from "react-redux"

const GetInstagamData = () => {
  const { loading, error, success, profile, profileAnalysis } = useSelector(
    (state) => state.instagram
  )

  return { loading, error, success, profile, profileAnalysis }
}

export default GetInstagamData
