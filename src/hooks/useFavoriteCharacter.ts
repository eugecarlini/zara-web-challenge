import { getFavoritesFromLocalStorage } from "@/utils/getFavoritesFromLocalStorage";

const useFavoriteCharacter = () => {
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
  };

  const isFavorited = (characterId: number): boolean =>
    getFavoritesFromLocalStorage().includes(characterId);

  return { getFavoritesFromLocalStorage, toggleFavorite, isFavorited };
};

export default useFavoriteCharacter;
