import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Character } from "@/types/character";
import "./styles.css";
import FavoriteIcon from "@/components/atoms/FavoriteIcon";
import useFavoriteCharacter from "@/hooks/useFavoriteCharacter";

const CharacterItem: React.FC<Character> = ({ id, url, imageSrc, name }) => {
  const { isFavorited, toggleFavorite } = useFavoriteCharacter();

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
        <button
          className="character__footer-button"
          onClick={handleToggleFavorite}
          aria-label={`${
            isFavorited(id) ? "Remove from favorites" : "Add to favorites"
          }`}
        >
          <FavoriteIcon isFavorite={isFavorited(id)} />
        </button>
      </footer>
    </article>
  );
};

export default CharacterItem;
