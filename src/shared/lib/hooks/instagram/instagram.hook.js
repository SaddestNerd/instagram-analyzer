import { getInstagramProfile } from '../../../../features/Slices/Instargam/thunks';
import { useDispatch } from 'react-redux';

const useInstagramData = () => {

  const dispatch = useDispatch();


  
  const dispatchInstagramAccount = async () => {
    try {
      dispatch(getInstagramProfile());
    } catch (error) {
      console.error('Error fetching Instagram profile:', error);
    }
  };
  
  return { dispatchInstagramAccount };
};

export default useInstagramData;