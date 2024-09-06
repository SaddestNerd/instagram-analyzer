import { useDispatch, useSelector } from 'react-redux';
import { getCurrency, getPlan, postSubscribeWithCard, postSubscribeWithGooglePay, postSubscribeWithApplePay } from '../../../../features/Slices/Payment/thunks';
import { resetSubscribeState  } from '../../../../features/Slices/Payment/slice';

const usePaymentData = () => {
  const dispatch = useDispatch();

  const dispatchPlan = () => {
    dispatch(getPlan());
  };
  const dispatchCurrency = () => {
    dispatch(getCurrency());
  };

  const subscribe = (email, firstName, lastName, tokenId) => {
    dispatch(postSubscribeWithCard({ email, firstName, lastName, tokenId }));
  };

  const subscribeGooglePay = async ({email,  tokenId, paymentData}) => {
    dispatch(postSubscribeWithGooglePay({ email, tokenId, paymentData}));
  };

  const subscribeApplePay = ({email, payment, tokenId}) => {
    dispatch(postSubscribeWithApplePay({ email, payment, tokenId }));
  };

  const resetState = () => {
    dispatch(resetSubscribeState());
  };

  return {subscribe, subscribeGooglePay, subscribeApplePay, resetState, dispatchPlan, dispatchCurrency};
};

export default usePaymentData;