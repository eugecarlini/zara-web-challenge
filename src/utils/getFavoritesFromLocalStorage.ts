export const getFavoritesFromLocalStorage = (): number[] => {
  const storage = localStorage.getItem("favoriteCharacters");
  return storage ? JSON.parse(storage) : [];
};
