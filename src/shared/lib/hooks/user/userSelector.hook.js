import { useSelector } from "react-redux"

const GetUserData = () => {
  const { loading, error, success, profile } = useSelector(
    (state) => state.user
  )

  return { loading, error, success, profile }
}

export default GetUserData
