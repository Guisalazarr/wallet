import React from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages/Home"
import Income from "../pages/Income"
import DefaultLayout from "../config/layout/DefaultLayout"
import Outcome from "../pages/Outcome"

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<DefaultLayout component={Home} />} />
                <Route path="/income" element={<DefaultLayout component={Income} />} />
                <Route path="/outcome" element={<DefaultLayout component={Outcome} />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes