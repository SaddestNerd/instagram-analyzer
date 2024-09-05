import { useSelector } from 'react-redux';

const GetInstagamData = () => {
  const { loading, error, success, profile } = useSelector(state => state.instagram);
  return { loading, error, success, profile };
};

export default GetInstagamData;