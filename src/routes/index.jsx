import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
                <Route path="/confirm-password/:token" element={<ConfirmPassword/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/not-found" element={<NotFound/>}/>
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>
                }/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

const PrivateRoute = ({ children }) => {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
}

const useAuth = () => {
    const token = localStorage.getItem("token")
    const name  = localStorage.getItem("userName")

    if(token !== null && name !== null) {
        return true;

    } else {
        return false
    }
}

export default RoutesApps