import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Forgot from "../pages/Forgot";
import Artical from "../pages/Artical";
import SlugLayout from "../layouts/SlugLayout";
import SlugPage from "../pages/SlugPage";
import DashLayout from "../layouts/DashLayout";
import Dashboard from "../pages/dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/:title" element={<Artical />} />
          <Route path="/:title/:article" element={<SlugLayout />}>
            <Route path="" element={<SlugPage />} />
          </Route>
          {/* Add many routes as you want */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
  

        {/* --------------- Dashboard routes --------------- */}
        <Route path="/dashboard" element={<DashLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default AppRoutes;
