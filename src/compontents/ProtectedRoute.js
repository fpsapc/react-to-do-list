import { Navigate, useLocation } from 'react-router-dom';

import { useAuthContext } from '../Context/AuthContext';

const ProtectedRoute = () => {
  const { user } = useAuthContext();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ pathname: location.pathname }}
        replace
      />
    );
  }
  return 0;
};

export default ProtectedRoute;
