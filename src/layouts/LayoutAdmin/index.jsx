import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./HeaderAdmin";
import Footer from "./Footer";

const LayoutAdmin = () => {
  return (
    <>
      <Header />
      <section className="maincontent">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default LayoutAdmin;
