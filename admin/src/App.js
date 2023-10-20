import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import MainLayout from "./components/MainLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/Dashboard";
import ServicesPage from "./pages/ServicesPage";
import TestPage from "./pages/TestPage";

const App = () => {
  const authState = useSelector((state) => state.auth);

  return (
    <Router>
      {authState.user ? (
        <MainLayout>
          <Routes>
            <Route path="/admin" element={<DashboardPage />} />
            <Route path="/admin/test" element={<TestPage />} />
            <Route path="/admin/services" element={<ServicesPage />} />
          </Routes>
        </MainLayout>
      ) : (
        <Routes>
          <Route path="/admin" element={<LoginPage />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
