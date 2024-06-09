import React from "react";
import ToggleFavoriteButton from "@/components/molecules/ToggleFavoriteButton";

type HeroMetadataProps = {
  name: string;
  description: string;
  onToggleFavorite: () => void;
};

const HeroMetadata: React.FC<HeroMetadataProps> = ({
  name,
  description,
  onToggleFavorite,
}) => {
  return (
    <div className="character-detail__info">
      <div className="character-detail__head">
        <h1 id="hero-title" className="character-detail__head-title">
          {name}
        </h1>

        <ToggleFavoriteButton onClick={onToggleFavorite} />
      </div>

      <p className="character-detail__info-description">
        {description || "No description available"}
      </p>
    </div>
  );
};

export default HeroMetadata;
