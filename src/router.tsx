import Login from './pages/Login';
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
        <Route path="/authorization" element={<AuthCodePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
