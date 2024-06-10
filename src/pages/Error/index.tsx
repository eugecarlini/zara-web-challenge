import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Container from "@/components/atoms/Container";
import "./styles.css";

type Error = {
  statusText?: string;
  message?: string;
};

const Error: React.FC = () => {
  const error: Error = useRouteError() as Error;

  return (
    <Container>
      <article className="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error?.statusText || error?.message}</p>
        <Link to="/">Go to Home</Link>
      </article>
    </Container>
  );
};

export default Error;
