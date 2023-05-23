import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Auth from "../components/Authentication/Auth";
const Layout = () => {
  const [showAuth, setShowAuth] = useState<boolean>(false);
  return (
    <div>
      {showAuth && <Auth setShowAuth={setShowAuth}></Auth>}

      <Header setShowAuth={setShowAuth}></Header>
      <div className="min-h-screen bg-[#1E293B]  ">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
