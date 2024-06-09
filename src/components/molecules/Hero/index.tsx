import React from "react";
import HeroMetadata from "@/components/molecules/HeroMetadata";

type HeroProps = {
  imageSrc: string;
  name: string;
  description: string;
  onToggleFavorite: () => void;
};

const Hero: React.FC<HeroProps> = ({
  imageSrc = "",
  name,
  description,
  onToggleFavorite,
}) => {
  return (
    <section className="character-detail__hero" aria-labelledby="hero-title">
      <div className="character-detail__hero-container">
        <img
          className="character-detail__hero-cover"
          src={imageSrc}
          alt={`Image of ${name}`}
        />

        <HeroMetadata
          name={name}
          description={description}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    </section>
  );
};

export default Hero;
