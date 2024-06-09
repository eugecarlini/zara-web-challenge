import React from "react";
import { Outlet } from "react-router-dom";
import Container from "@/components/atoms/Container";
import Header from "@/components/molecules/Header";

const Layout: React.FC = () => (
  <main>
    <Header />
    <Container>
      <Outlet />
    </Container>
  </main>
);

export default Layout;
