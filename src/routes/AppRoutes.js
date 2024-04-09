import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Forgot from "../pages/Forgot";
import SlugPage from "../pages/SlugPage";
import SlugLayout from "../layouts/SlugLayout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/:title" element={<SlugLayout />}>
            <Route path="" element={<SlugPage />} />
          </Route>
          {/* Add many routes as you want */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
    
      </Routes>
    </Router>
  );
};

export default AppRoutes;
