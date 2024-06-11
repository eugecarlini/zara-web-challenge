import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Character } from "@/types/character";
import useFavoriteCharacter from "@/hooks/useFavoriteCharacter";
import ToggleFavoriteButton from "@/components/molecules/ToggleFavoriteButton";
import { Triangle } from "@/components/atoms/Triangle";
import "./styles.css";

const CharacterItem: React.FC<Character> = ({ id, url, imageSrc, name }) => {
  const { isFavorited, toggleFavorite } = useFavoriteCharacter();
  const [isActive, setIsActive] = useState(isFavorited(id));

  const handleToggleFavorite = useCallback(() => {
    toggleFavorite(id);
    setIsActive(!isActive);
  }, [toggleFavorite, id]);

  return (
    <article className="character__item">
      <Link
        to={url || "#"}
        key={id}
        className="character__item-link"
        aria-label={`Go to detail page`}
      >
        <img className="character__item-cover" src={imageSrc} alt={name} />
      </Link>

      <footer className="character__footer">
        <div className="character__footer-bar"></div>
        <h2 className="character__footer-title">{name}</h2>

        <ToggleFavoriteButton
          isFavorited={isActive}
          onClick={handleToggleFavorite}
        />

        <Triangle />
      </footer>
    </article>
  );
};

export default CharacterItem;
