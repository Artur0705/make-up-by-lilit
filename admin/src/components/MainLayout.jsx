import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
