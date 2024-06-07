import React from "react";
import "./styles.css";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => (
  <section className="container">{children}</section>
);

export default Container;
