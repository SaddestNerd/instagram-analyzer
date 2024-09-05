import {  useSelector } from 'react-redux';



const GetAuthData = () => {

  const { loading, error, success, successSignInToken } = useSelector(state => state.auth);
  return { loading, error, success, successSignInToken };
};

export default GetAuthData;