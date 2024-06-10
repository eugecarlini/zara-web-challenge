import React from "react";
import Container from "@/components/atoms/Container";
import "./styles.css";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <article className="error-message">
      <Container>
        <p className="error-message__text">{message}</p>
      </Container>
    </article>
  );
};

export default ErrorMessage;
