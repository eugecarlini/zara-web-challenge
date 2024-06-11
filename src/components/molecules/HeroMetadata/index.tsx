import React, { useCallback, useState } from "react";
import ToggleFavoriteButton from "@/components/molecules/ToggleFavoriteButton";
import useFavoriteCharacter from "@/hooks/useFavoriteCharacter";
import { Triangle } from "@/components/atoms/Triangle";
import "./styles.css";

type HeroMetadataProps = {
  id: number;
  name: string;
  description: string;
};

const HeroMetadata: React.FC<HeroMetadataProps> = ({
  id,
  name,
  description,
}) => {
  const { isFavorited, toggleFavorite } = useFavoriteCharacter();
  const [isActive, setIsActive] = useState(isFavorited(id));

  const handleToggleFavorite = useCallback(() => {
    toggleFavorite(id);
    setIsActive(!isActive);
  }, [toggleFavorite, id]);

  return (
    <div className="character-detail__info" data-testid="hero-metadata">
      <div className="character-detail__head">
        <h1 id="hero-title" className="character-detail__head-title">
          {name}
        </h1>

        <ToggleFavoriteButton
          isFavorited={isActive}
          onClick={handleToggleFavorite}
        />
      </div>

      <p className="character-detail__info-description">
        {description || "No description available"}
      </p>

      <Triangle />
    </div>
  );
};

export default HeroMetadata;
