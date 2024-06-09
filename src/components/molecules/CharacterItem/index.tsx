import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Character } from "@/types/character";
import useFavoriteCharacter from "@/hooks/useFavoriteCharacter";
import ToggleFavoriteButton from "@/components/molecules/ToggleFavoriteButton";
import "./styles.css";

const CharacterItem: React.FC<Character> = ({ id, url, imageSrc, name }) => {
  const { toggleFavorite } = useFavoriteCharacter();

  const handleToggleFavorite = useCallback(() => {
    toggleFavorite(id);
  }, [toggleFavorite, id]);

  return (
    <article className="character__item">
      <Link
        to={url || "#"}
        key={id}
        className="character__item-link"
        aria-label={`Go to detail page`}
      >
        <img className="character__item-image" src={imageSrc} alt={name} />
      </Link>

      <footer className="character__footer">
        <div className="character__footer-bar"></div>
        <h2 className="character__footer-title">{name}</h2>
        <ToggleFavoriteButton onClick={handleToggleFavorite} />
      </footer>
    </article>
  );
};

export default CharacterItem;
