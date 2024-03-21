import React, { ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
