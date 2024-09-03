import { useState } from "react"

export const useAccessForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
  const isValidEmail = emailRegex.test(email)
  const isMissingAt = !email.includes("@")
  const isMissingDot = email.includes("@") && !email.includes(".")

  const isButtonDisabled =
  email.length < 6 || password.length < 6 || !isValidEmail
  const isPasswordShort = password.length < 6 && password.length > 0

  const isButtonDisabledEmail = email.length < 6 || !isValidEmail

  return {
    email,
    password,
    showPassword,
    togglePasswordVisibility,
    handleEmailChange,
    handlePasswordChange,
    isValidEmail,
    isMissingAt,
    isMissingDot,
    isButtonDisabled,
    isPasswordShort,
    isButtonDisabledEmail,
  }
}
