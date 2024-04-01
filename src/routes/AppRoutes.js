import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route path="" element={<Home />} />
                    {/* Add many routes as you want */}
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes