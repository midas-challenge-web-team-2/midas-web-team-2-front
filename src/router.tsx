import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import MainPage from './pages/Main';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
