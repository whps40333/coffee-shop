import { Route, Routes } from "react-router-dom";

import UserRoutes from "./UserRoutes";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import RegisterPage from "../pages/RegisterPage";

function Router() {
  return (
    <Routes>
      <Route path="Login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="Register" element={<RegisterPage />} />
      <Route path="User/*" element={<UserRoutes />} />
    </Routes>
  );
}

export default Router;
