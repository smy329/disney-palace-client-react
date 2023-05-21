import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center  h-[calc(100vh-200px)]">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user?.email) {
    return children;
  } else {
    toast.error('You need to login first');
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
