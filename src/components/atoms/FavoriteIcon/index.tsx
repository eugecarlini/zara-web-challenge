import React from "react";
import "./styles.css";

type FavoriteIconProps = {
  isActive: boolean;
};

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ isActive }) => {
  const modifier = isActive ? "active" : "inactive";

  return (
    <svg
      className={`favorite-icon favorite-icon--${modifier}`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="-1 -1 26 26"
      fill="none"
    >
      <path
        fillRule="evenodd"
        strokeWidth="2"
        clipRule="evenodd"
        d="M12 3.92359L6 0.281967L0 3.92359V11.7271L12 21.9583L24 11.7271V3.92359L18 0.281967L12 3.92359Z"
      />
    </svg>
  );
};

export default FavoriteIcon;
