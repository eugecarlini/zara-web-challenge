import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { Character } from "@/types/character";
import "./styles.css";
import FavoriteIcon from "@/components/atoms/FavoriteIcon";
import useFavoriteCharacter from "@/hooks/useFavoriteCharacter";

const CharacterItem: React.FC<Character> = ({ id, url, imageSrc, name }) => {
  const { isFavorited, toggleFavorite } = useFavoriteCharacter();

  const isFavoritedCharacter = useMemo(
    () => isFavorited(id),
    [isFavorited, id]
  );

  const handleToggleFavorite = useCallback(() => {
    toggleFavorite(id);
  }, [toggleFavorite, id]);

  return (
    <article className="character__item">
      <Link to={url || "#"} key={id} className="character__item-link">
        <img
          className="character__item-image"
          src={imageSrc}
          alt={name}
          width="188.57"
        />
      </Link>

      <footer className="character__footer">
        <h2 className="character__footer-title">{name}</h2>
        <button
          className="character__footer-button"
          onClick={handleToggleFavorite}
          aria-label={`${
            isFavoritedCharacter ? "Remove from favorites" : "Add to favorites"
          }`}
        >
          <FavoriteIcon isActive={isFavoritedCharacter} />
        </button>
      </footer>
    </article>
  );
};

export default CharacterItem;
