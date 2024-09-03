import React, { useEffect } from "react"
import "./accountCreating.scss"
import { CreateAcc } from "../../../widgets"
import { useSearchParams } from 'react-router-dom';
import useAuthData from "../../../shared/lib/hooks/auth/auth.hook";

const AccountCreating = () => {

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const { checkSignUpToken } = useAuthData();

  useEffect(() => {
    if(token){
      checkSignUpToken(token)
    }
  }, [token])

  return (
    <div className="account-creating-wrapper">
      <CreateAcc token={token}/>
    </div>
  )
}

export default AccountCreating
