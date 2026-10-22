
export const initialFavoritesState = (() => {
  try {
    const favorites = localStorage.getItem("favorites");

    if (favorites) {
      return JSON.parse(favorites);
    }

    return [];
  } catch {
    return [];
  }
})();


export const favoritesReducer = (state, action) => {
  if (action.type === "TOGGLE_FAVORITE") {
    const photo = action.payload;

    const alreadyFavorite = state.some(
      (item) => item.id === photo.id
    );

    let updatedFavorites;

    if (alreadyFavorite) {
     
      updatedFavorites = state.filter(
        (item) => item.id !== photo.id
      );
    } else {
      
      updatedFavorites = [...state, photo];
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    return updatedFavorites;
  }

  return state;
};

