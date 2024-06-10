import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useFavoriteList } from "@/context/FavoritesContext";
import Container from "@/components/atoms/Container";
import Logo from "@/components/atoms/Logo";
import ToggleFavoriteButton from "@/components/molecules/ToggleFavoriteButton";
import "./styles.css";

const Header: React.FC = () => {
  const { favoriteList, toggleFavorites } = useFavoriteList();
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const handleOnClick = useCallback(() => {
    toggleFavorites(true);
    goToHomePage();
  }, [toggleFavorites, goToHomePage]);

  return (
    <header className="header">
      <Container>
        <Logo />
        <ToggleFavoriteButton
          count={favoriteList.length.toString()}
          onClick={handleOnClick}
        />
      </Container>
    </header>
  );
};

export default Header;
