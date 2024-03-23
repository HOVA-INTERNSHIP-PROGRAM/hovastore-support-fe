import "./App.css";
import { Routes, Route } from "react-router-dom";


import IndexLayout from "./layout/IndexLayout";
import NotFound from "./pages/NotFound";
import HomeScreen from "./pages/HomeScreen";
import DashBoardScreen from "./pages/DashBoardScreen";
import DashLayout from "./layout/DashLayout";
import LoginScreen from "./pages/LoginScreen";


function App() {
  return (
    <>
    <Routes>
      <Route element={<IndexLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" index element={<HomeScreen />} />
        <Route path="/admin" element={<LoginScreen />} />

      </Route>
      <Route element={<DashLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" index element={<DashBoardScreen />} />
        
      </Route>
    </Routes>
  </>
  );
}

export default App;
