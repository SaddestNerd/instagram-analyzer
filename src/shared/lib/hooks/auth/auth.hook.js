import { useNavigate } from 'react-router-dom';
import { postCheckSignUpToken, postSignUpUser } from '../../../../features/Slices/Auth/thunks';
import { useDispatch } from 'react-redux';

const useAuthData = () => {
  const dispatch = useDispatch();
  const checkSignUpToken = (token) => {
    dispatch(postCheckSignUpToken({token}));
  };

  const navigate = useNavigate();

  const signUp = async (email, password, token) => {
    const result = await dispatch(postSignUpUser({ email, password, token }));
    if (postSignUpUser.fulfilled.match(result)) {
      navigate('/account-information', { state: { token } });
    } else {
      console.error('Sign-up failed', result.payload);
    }
  };
  
  return { checkSignUpToken, signUp };
};

export default useAuthData;