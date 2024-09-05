import React, { useEffect } from "react"
import "./accountCreating.scss"
import { CreateAcc } from "../../../widgets"
import { useSearchParams } from 'react-router-dom';
import useAuthData from "../../../shared/lib/hooks/auth/auth.hook";

import GetAuthData from "../../../shared/lib/hooks/auth/authSelector.hook";
import { Loader } from "../../../shared";


const AccountCreating = () => {

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const { checkSignUpToken } = useAuthData();

  useEffect(() => {
    if (token) {
      checkSignUpToken(token)
    }
  }, [token])

  const { successSignInToken, loading } = GetAuthData();

  if (loading === true) return <div className="account-creating-wrapper"><div className="create-acc-section"><Loader/></div></div>
  if (successSignInToken === false) return <div className="account-creating-wrapper"><div className="create-acc-section"><p className="title24-semibold-outfit error-message">Registration token is not active, check the registration link for correctness</p></div></div>

  return (
    <div className="account-creating-wrapper">
      <CreateAcc token={token} />
    </div>
  )
}

export default AccountCreating
