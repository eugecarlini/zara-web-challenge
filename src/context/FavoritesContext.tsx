import React, { createContext, useState, useContext } from "react";
import { getFavoritesFromLocalStorage } from "@/utils/getFavoritesFromLocalStorage";

interface FavoritesContextProps {
  showFavorites: boolean;
  favoriteList: number[];
  favoritesCount: number;
  toggleFavorites: (isActive: boolean) => void;
  updateFavoriteList: (ids: number[]) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

export const FavoriteListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [favoriteList, setFavoriteList] = useState(
    getFavoritesFromLocalStorage()
  );

  const toggleFavorites = (isActive: boolean) => setShowFavorites(isActive);
  const updateFavoriteList = (ids: number[]) => setFavoriteList(ids);

  return (
    <FavoritesContext.Provider
      value={{
        favoriteList,
        showFavorites,
        toggleFavorites,
        updateFavoriteList,
        favoritesCount: favoriteList.length,
      }}
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
