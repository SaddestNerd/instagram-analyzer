import { useState } from "react"

export const useAccessForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
  const isValidUsername = emailRegex.test(username)
  const isMissingAt = !username.includes("@")
  const isMissingDot = username.includes("@") && !username.includes(".")

  const isButtonDisabled =
    username.length < 6 || password.length < 6 || !isValidUsername
  const isPasswordShort = password.length < 6 && password.length > 0

  const isButtonDisabledEmail = username.length < 6 || !isValidUsername

  return {
    username,
    password,
    showPassword,
    togglePasswordVisibility,
    handleUsernameChange,
    handlePasswordChange,
    isValidUsername,
    isMissingAt,
    isMissingDot,
    isButtonDisabled,
    isPasswordShort,
    isButtonDisabledEmail,
  }
}
