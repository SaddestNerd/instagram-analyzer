import React, { useState } from "react"
import { DefaultInput, DefaultButton } from "../../../../shared"
import { Icon } from "../../../../shared"
import "./accessToApp.scss"
const AccessToApp = ({ onClick }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const isButtonDisabled = username.length < 6 || password.length < 6;
    const isPasswordShort = password.length < 6 && password.length > 0;

  return (
    <div className="access-app-block">
      <div>
        <DefaultInput
          placeholder="Enter your email"
          onChange={handleUsernameChange}
          value={username}
          text="Email"
          type="email"
        />
      </div>
      <div className="acess-app-input">
        <DefaultInput
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          value={password}
          text="Password"
          type={showPassword ? "text" : "password"}
          isError={isPasswordShort}
        />
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          <Icon
            type={showPassword ? "openEye" : "closedEye"}
            alt={showPassword ? "openEye" : "closedEye"}
            width={24}
            height={24}
            strokeColor="#B0AECC"
            className={`eye-icon ${showPassword ? "eye-open" : "eye-closed"}`}
          />
        </span>
      </div>
      {isPasswordShort && (
        <p className="title11-regular-outfit error-message">The password must be 6 characters long or more.</p>
      )}
      <div className="acess-app-button">
      <DefaultButton
        text="start analysis"
        onClick={onClick}
        isDisabled={isButtonDisabled}
      />
      </div>
    </div>
  )
}

export default AccessToApp
