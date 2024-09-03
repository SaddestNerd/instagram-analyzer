import { postCheckSignUpToken, postSignUpUser } from '../../../../features/Slices/Auth/thunks';
import { useDispatch } from 'react-redux';

const useAuthData = () => {
  const dispatch = useDispatch();
  const checkSignUpToken = (token) => {
    dispatch(postCheckSignUpToken({token}));
  };

  const signUp = (email, password, token) => {
    dispatch(postSignUpUser({email, password, token}));
  };
  
  return { checkSignUpToken, signUp };
};

export default useAuthData;