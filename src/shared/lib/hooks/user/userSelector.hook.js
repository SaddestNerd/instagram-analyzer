import { useSelector } from "react-redux"

const GetUserData = () => {
  const { loading, error, success, profile, instagramProfile } = useSelector(
    (state) => state.user
  )

  return { loading, error, success, profile, instagramProfile }
}

export default GetUserData
