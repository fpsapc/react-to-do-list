import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';

const Layout = () => {
  return (
    <div className="wrapper">
     <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
    </div>
  );
};
export default Layout;
