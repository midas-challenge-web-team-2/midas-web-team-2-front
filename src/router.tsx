import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import MainPage from './pages/Main';
import AuthCodePage from './pages/AuthCode';
import { AdminHome } from './pages/AdminHome';
import ManageWorkType from './pages/ManageWorkType';
import FirstLogin from './pages/FirstLogin';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/authorization" element={<AuthCodePage />} />
        <Route path="/adminHome" element={<AdminHome />} />
        <Route path="/workingManage" element={<ManageWorkType />} />
        <Route path="/first-login" element={<FirstLogin />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
