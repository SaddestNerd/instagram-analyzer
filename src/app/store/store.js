import { configureStore } from '@reduxjs/toolkit';
import paymentReducer from '../../features/Slices/Payment/slice';
import authReducer from '../../features/Slices/Auth/slice';

 const store = configureStore({
  reducer: {
    payment: paymentReducer,
    auth: authReducer,
  },
});

export default store