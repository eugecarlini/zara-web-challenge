import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useFavoriteList } from "@/context/FavoritesContext";
import { useCharacters } from "@/context/CharacterContext";
import LoadingBar from "@/components/atoms/LoadingBar";
import Container from "@/components/atoms/Container";
import Logo from "@/components/atoms/Logo";
import ToggleFavoriteButton from "@/components/molecules/ToggleFavoriteButton";
import "./styles.css";

const Header: React.FC = () => {
  const { isLoading } = useCharacters();
  const { favoriteList, toggleFavorites, favoritesCount } = useFavoriteList();
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const handleOnClick = useCallback(() => {
    toggleFavorites(true);
    goToHomePage();
  }, [toggleFavorites, goToHomePage]);

  return (
    <header className="header" role="banner">
      <Container>
        <Logo aria-label="Marvel Logo" />
        <ToggleFavoriteButton
          count={favoritesCount.toString()}
          onClick={handleOnClick}
          aria-label={`You have ${favoriteList?.length || 0} favorite items`}
        />
      </Container>
      {isLoading && <LoadingBar isLoading={isLoading} />}
    </header>
  );
};

export default Header;
