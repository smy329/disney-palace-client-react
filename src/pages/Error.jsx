import { useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const Error = () => {
  useTitle('404');
  const navigate = useNavigate();
  return (
    <div className='bg-[url("https://i.ibb.co/JsFZF0p/404.jpg")] bg-gray-800 bg-center bg-no-repeat h-screen relative'>
      <button
        className="theme-btn w-3/5 absolute left-1/4 top-3/4"
        onClick={() => {
          navigate('/');
        }}
      >
        Back To Home
      </button>
    </div>
  );
};

export default Error;
