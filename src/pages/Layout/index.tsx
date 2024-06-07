import React from "react";
import { Outlet } from "react-router-dom";
import Container from "@/components/atoms/Container";

const Layout: React.FC = () => (
  <main>
    <Container>
      <Outlet />
    </Container>
  </main>
);

export default Layout;
