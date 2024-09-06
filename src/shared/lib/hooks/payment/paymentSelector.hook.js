import {  useSelector } from 'react-redux';



const GetPaymentData = () => {

  const { currency, plan, registerToken, loading, error, success } = useSelector(state => state.payment);
  return { loading, error, success, currency, plan, registerToken };
};

export default GetPaymentData;