import { BrowserRouter, Routes, Route } from "react-router-dom";
import Redirect from "../pages/redirect.pages"
import Home from "../pages/home.pages"
import Register from "../pages/register.pages";
import Login from "../pages/login.pages";
import ConfirmPassword from "../pages/confirm-password.pages";
import ChangePassword from "../pages/change-password.pages";
import ForgotPassword from "../pages/forgot-password.pages";
import NotFound from "../pages/404.pages"
import Dashboard from "../pages/dashboard.pages";

const RoutesApps = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:uniqueId" element={<Redirect/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/change-password" element={<ChangePassword/>}/>
                <Route path="/confirm-password" element={<ConfirmPassword/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/not-found" element={<NotFound/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApps