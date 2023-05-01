import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/Routes/Home';
import About from '../src/Routes/About';
import Login from '../src/Routes/Login';
import Profile from '../src/Routes/Profile';
import NotMatch from '../src/Routes/NotMatch';
import SinglePage from '../src/Routes/SinglePage';
import Layout from './compontents/Layout';
import ProtectedRoute from './compontents/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
