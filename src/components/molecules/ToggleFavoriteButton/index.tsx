import React from "react";
import FavoriteIcon from "@/components/atoms/FavoriteIcon";
import "./styles.css";

type ToggleFavoriteButtonProps = {
  isFavorited: boolean;
  onClick: () => void;
  className?: string;
};

const ToggleFavoriteButton: React.FC<ToggleFavoriteButtonProps> = ({
  isFavorited,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`button_toggle-favorite ${className}`}
      aria-pressed={isFavorited}
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
    >
      <FavoriteIcon isActive={isFavorited} />
    </button>
  );
};

export default ToggleFavoriteButton;
