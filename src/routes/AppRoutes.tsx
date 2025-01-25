import React from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home"
import Income from "../pages/Income"
import Outcome from "../pages/Outcome"
import DefaultLayout from "../config/layout/DefaultLayout/DefaultLayout"
import Login from "../pages/Login"
import LoginLayout from "../config/layout/LoginLayout/LoginLayout"
import Register from "../pages/Register"

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginLayout component={Login} />} />
                <Route path="/register" element={<LoginLayout component={Register} />} />
                <Route path="/home" element={<DefaultLayout component={Home} />} />
                <Route path="/income" element={<DefaultLayout component={Income} />} />
                <Route path="/outcome" element={<DefaultLayout component={Outcome} />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes