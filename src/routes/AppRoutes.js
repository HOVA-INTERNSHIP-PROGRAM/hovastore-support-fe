import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Forgot from "../pages/Forgot";
import SlugPage from "../pages/SlugPage";
import SlugLayout from "../layouts/SlugLayout";
import DashLayout from "../layouts/DashLayout";
import Card from "../components/Card";
import Dashboard from "../pages/dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* --------------- Home routes --------------- */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path=":title" element={<SlugLayout />}>
            <Route index element={<SlugPage />} />
          </Route>
        </Route>
        {/* --------------- Login routes --------------- */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />

        {/* --------------- Dashboard routes --------------- */}
        <Route path="/dashboard" element={<DashLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="Articles" element={<Card number={`300`} title={`Article`} />} />
          <Route path="Feedback" element={<Card number={`300`} title={`Feedback`} />} />
          <Route path="Content" element={<Card number={`300`} title={`Content`} />} />
          <Route path="Category" element={<Card number={`300`} title={`category`} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

