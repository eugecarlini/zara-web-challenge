import React from "react";
import { useRouteError } from "react-router-dom";
import Container from "@/components/atoms/Container";

type Error = {
  statusText?: string;
  message?: string;
};

const Error: React.FC = () => {
  const error: Error = useRouteError() as Error;

  return (
    <Container>
      <article id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error?.statusText || error?.message}</p>
      </article>
    </Container>
  );
};

export default Error;
