import { configureStore } from '@reduxjs/toolkit';
import paymentReducer from '../../features/Slices/Payment/slice';
import authReducer from '../../features/Slices/Auth/slice';
import instagramReducer from '../../features/Slices/Instargam/slice';
import userReducer from '../../features/Slices/User/slice';

 const store = configureStore({
  reducer: {
    payment: paymentReducer,
    auth: authReducer,
    instagram: instagramReducer,
    user: userReducer,
  },
});

export default store