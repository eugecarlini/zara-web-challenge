import { useFavoriteList } from "@/context/FavoritesContext";
import { getFavoritesFromLocalStorage } from "@/utils/getFavoritesFromLocalStorage";

const useFavoriteCharacter = () => {
  const { updateFavoriteList } = useFavoriteList();

  if (!localStorage.getItem("favoriteCharacters")) {
    localStorage.setItem("favoriteCharacters", JSON.stringify([]));
  }

  const toggleFavorite = (characterId: number) => {
    const favorites = getFavoritesFromLocalStorage();

    if (favorites && !favorites.includes(characterId)) {
      localStorage.setItem(
        "favoriteCharacters",
        JSON.stringify([...favorites, characterId])
      );
    } else {
      const updatedFavorites = favorites.filter(
        (favorite: number) => favorite !== characterId
      );

      localStorage.setItem(
        "favoriteCharacters",
        JSON.stringify(updatedFavorites)
      );
    }

    updateFavoriteList(getFavoritesFromLocalStorage());
  };

  const isFavorited = (characterId: number | null): boolean | false => {
    if (!characterId) return false;
    return getFavoritesFromLocalStorage().includes(characterId);
  };

  return { getFavoritesFromLocalStorage, toggleFavorite, isFavorited };
};

export default useFavoriteCharacter;
