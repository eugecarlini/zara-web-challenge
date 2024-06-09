import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/molecules/Header";

const Layout: React.FC = () => (
  <main>
    <Header />
    <Outlet />
  </main>
);

export default Layout;
