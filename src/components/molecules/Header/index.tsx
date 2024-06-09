import React from "react";
import { useNavigate } from "react-router-dom";
import { useFavoriteList } from "@/context/FavoritesContext";
import Container from "@/components/atoms/Container";
import Logo from "@/components/atoms/Logo";
import "./styles.css";

const Header: React.FC = () => {
  const { showFavorites, toggleFavorites } = useFavoriteList();
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const handleOnClick = () => {
    toggleFavorites(true);
    goToHomePage();
  };

  return (
    <header className="header">
      <Container>
        <Logo />
        <button
          className="header__button"
          onClick={handleOnClick}
          aria-pressed={showFavorites}
          aria-label="Show favorite characters"
        >
          Favorites
        </button>
      </Container>
    </header>
  );
};

export default Header;
