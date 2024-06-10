import React from "react";
import FavoriteIcon from "@/components/atoms/FavoriteIcon";
import "./styles.css";

type ToggleFavoriteButtonProps = {
  isFavorited?: boolean;
  onClick: () => void;
  count?: string;
};

const ToggleFavoriteButton: React.FC<ToggleFavoriteButtonProps> = ({
  isFavorited = false,
  onClick,
  count,
}) => {
  return (
    <button
      onClick={onClick}
      aria-pressed={isFavorited}
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
      className="toggle-button"
    >
      <FavoriteIcon isActive={isFavorited} />

      {count && (
        <span className="toggle-button__count" aria-hidden="true">
          {count}
        </span>
      )}
    </button>
  );
};

export default ToggleFavoriteButton;
