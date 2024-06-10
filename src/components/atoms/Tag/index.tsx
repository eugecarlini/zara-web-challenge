import React from "react";
import "./styles.css";

type TagProps = {
  text: string | number;
};

export const Tag: React.FC<TagProps> = ({ text = 0 }) => {
  const result = text === 1 ? "result" : "results";
  return (
    <span className="tag" aria-label={`${text} ${result}`}>
      {text} {result}
    </span>
  );
};
