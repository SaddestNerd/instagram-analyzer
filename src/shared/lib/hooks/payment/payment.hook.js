import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrency, getPlan, postSubscribeWithCard, postSubscribeWithGooglePay, postSubscribeWithApplePay } from '../../../../features/Slices/Payment/thunks';
import { resetSubscribeState  } from '../../../../features/Slices/Payment/slice';

const usePaymentData = () => {
  const dispatch = useDispatch();
  const { currency, plan, loading, error, success } = useSelector(state => state.payment);

  useEffect(() => {
    dispatch(getCurrency());
    dispatch(getPlan());
  }, [dispatch]);


  const subscribe = (email, firstName, lastName, tokenId) => {
    dispatch(postSubscribeWithCard({ email, firstName, lastName, tokenId }));
  };

  const subscribeGooglePay = async ({email,  tokenId, paymentData}) => {
    dispatch(postSubscribeWithGooglePay({ email, tokenId, paymentData}));
  };

  const subscribeApplePay = (email, paymentData, tokenId) => {
    alert({email, paymentData, tokenId})
    dispatch(postSubscribeWithApplePay({ email, paymentData, tokenId }));
  };

  const resetState = () => {
    dispatch(resetSubscribeState());
  };

  return { loading, error, success, subscribe, subscribeGooglePay, subscribeApplePay, resetState, currency, plan };
};

export default usePaymentData;