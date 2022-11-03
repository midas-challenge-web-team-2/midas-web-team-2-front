import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import MainPage from "./pages/Main";
import { AdminHome } from "./pages/AdminHome";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/" element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
