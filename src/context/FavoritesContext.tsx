import { getFavoritesFromLocalStorage } from "@/utils/getFavoritesFromLocalStorage";
import React, { createContext, useState, useContext } from "react";

interface FavoritesContextProps {
  favorites: number[];
  showFavorites: boolean;
  toggleFavorites: (isActive: boolean) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

export const FavoriteListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const toggleFavorites = (isActive: boolean) => setShowFavorites(isActive);

  const favorites = getFavoritesFromLocalStorage();

  return (
    <FavoritesContext.Provider
      value={{ favorites, showFavorites, toggleFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoriteList = (): FavoritesContextProps => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavoriteList must be used within a FavoritesProvider");
  }

  return context;
};
