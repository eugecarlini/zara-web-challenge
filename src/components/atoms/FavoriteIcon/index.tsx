import React from "react";
import "./styles.css";

type FavoriteIconProps = {
  isActive: boolean;
  width?: number;
  height?: number;
};

const FavoriteIcon: React.FC<FavoriteIconProps> = ({
  isActive,
  width = 13,
  height = 12,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className={`icon__favorite icon__favorite--${isActive ? "red" : "empty"}`}
    >
      <path
        fillRule="evenodd"
        strokeWidth="1"
        d="M6.571 2.373l-3-1.82-3 1.82v3.902l6 5.115 6-5.115V2.373l-3-1.82-3 1.82z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default FavoriteIcon;
