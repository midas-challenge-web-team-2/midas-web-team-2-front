import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import MainPage from "./pages/Main";
import AuthCodePage from "./pages/AuthCode";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/authorization" element={<AuthCodePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
