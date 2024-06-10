import React from "react";
import HeroMetadata from "@/components/molecules/HeroMetadata";

type HeroProps = {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
};

const Hero: React.FC<HeroProps> = ({
  id,
  name,
  description,
  imageSrc = "",
}) => {
  return (
    <section className="character-detail__hero" aria-labelledby="hero-title">
      <div className="character-detail__hero-container">
        <img
          className="character-detail__hero-cover"
          src={imageSrc}
          alt={`Image of ${name}`}
        />

        <HeroMetadata id={id} name={name} description={description} />
      </div>
    </section>
  );
};

export default Hero;
