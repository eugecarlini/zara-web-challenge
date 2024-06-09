import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/marvel-logo.svg";
import { useFavoriteList } from "@/context/FavoritesContext";

const Logo: React.FC = () => {
  const { toggleFavorites } = useFavoriteList();

  return (
    <Link
      to="/"
      onClick={() => toggleFavorites(false)}
      aria-label="Go to homepage"
    >
      <img src={logo} alt="Marvel logo" />
    </Link>
  );
};

export default Logo;
